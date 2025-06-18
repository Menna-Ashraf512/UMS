import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IUsers } from 'src/app/interfaces/iusers';
import { UserSearchPipe } from 'src/app/pipes/user-search.pipe';
import { SearchService } from 'src/app/services/search.service';
import { UserServiceService } from 'src/app/services/users/user-service.service';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  searchText: string = '';
  page: number = 1;
  usersList: IUsers[] = [];
  constructor(
    private _userServiceService: UserServiceService,
    private toastr: ToastrService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.getAllUsers();
    this.search();
  }
  search() {
    this.searchService.searchTerm$.subscribe((term) => {
      this.searchText = term;
    });
  }
  getAllUsers() {
    this._userServiceService.getAllUsers().subscribe({
      next: (res) => {
        this.usersList = res.users;
      },
    });
  }
  deleteData(id: number) {
    this._userServiceService.DeleteUserById(id).subscribe({
      next: (res) => {
        // console.log(res);
      },
      error: (err) => {
        this.toastr.error(err.error.message, 'Sorry');
      },
      complete: () => {
        this.toastr.success('Delete Done!', 'Success!');
      },
    });
  }
}

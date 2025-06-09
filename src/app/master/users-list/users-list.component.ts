import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IUsers } from 'src/app/interfaces/iusers';
import { UserServiceService } from 'src/app/services/users/user-service.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
page: number = 1;
  usersList:IUsers[]=[]
  constructor(private _userServiceService:UserServiceService,private toastr:ToastrService){}

  ngOnInit(): void {
      this.getAllUsers()
  }
  getAllUsers(){
    this._userServiceService.getAllUsers().subscribe({
      next:(res)=>{
        this.usersList=res.users
      }
    })
  }
   deleteData(id:number){
    this._userServiceService.DeleteUserById(id).subscribe({
      next:(res)=>{
        // console.log(res);
      },
      error:(err)=>{
        this.toastr.error(err.error.message, 'Sorry');
      },
      complete: () => {
        this.toastr.success('Delete Done!', 'Success!');
      }
    })
  }
}

import { Component, OnInit } from '@angular/core';
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
  constructor(private _userServiceService:UserServiceService){}

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

}

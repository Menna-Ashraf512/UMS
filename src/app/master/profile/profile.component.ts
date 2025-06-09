import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { UserServiceService } from 'src/app/services/users/user-service.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  AddForm = new FormGroup({
    firstName: new FormControl({ value: null, disabled: true }),
    lastName: new FormControl({ value: null, disabled: true }),
    age: new FormControl({ value: null, disabled: true }),
    birthDate: new FormControl({ value: null, disabled: true }),
    email: new FormControl({ value: null, disabled: true }),
    phone: new FormControl({ value: null, disabled: true }),
  });
  userData:any
  userId:number=0
  constructor(
    private _userServiceService: UserServiceService,
  ) {
  }

  ngOnInit(): void {
       const token = localStorage.getItem('userToken');
  if (token) {
    const decoded: any = jwtDecode(token);
    this.userId=decoded.id
    this.getProfile(this.userId)
  }
  }

  getProfile(id:number){
    this._userServiceService.getUserById(id).subscribe({
      next:(res)=>{
        this.userData=res
          // console.log(res)
      },
      error:(err)=> {
          console.log(err)
      },
      complete:()=>{
          this.AddForm.patchValue({
          firstName:this.userData.firstName,
          lastName:this.userData.lastName,
          age:this.userData.age,
          email:this.userData.email,
          phone:this.userData.phone,
          birthDate:this.userData.birthDate,
        })
      },
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/app/services/users/user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{
  AddForm = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.required]),
    birthDate: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
  });
  userId:number=0
  userData:any;
  constructor(
    private _userServiceService: UserServiceService,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute:ActivatedRoute
  ) {

    this.userId=this.activatedRoute.snapshot.params['id']
  }
ngOnInit(): void {
    if(this.userId){
      this.getSingleUser(this.userId)
    }
}
  sendData(data:FormGroup){
    this._userServiceService.addUser(data.value).subscribe({
      next:(res)=>{
        this.AddForm.reset();
      },
      error:(err)=>{
        this.toastr.error(err.error.message, 'Sorry');
      },
      complete: () => {
        this.toastr.success('Save Done', 'Success!');
      }
    })
  }
  getSingleUser(id:number){
    this._userServiceService.getUserById(id).subscribe({
      next:(res)=>{
        this.userData=res
      },
      error:(err)=>{
        this.toastr.error(err.error.message, 'Sorry');
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
      }
    })
  }
  UpdateData(data:FormGroup,id:number){
    this._userServiceService.updateUser(data.value,id).subscribe({
      next:(res)=>{
        // console.log(res);
        this.AddForm.reset();
      },
      error:(err)=>{
        this.toastr.error(err.error.message, 'Sorry');
      },
      complete: () => {
        this.toastr.success('Update Done!', 'Success!');
        setTimeout(() => {
          this.router.navigate(['/users/userList'])
        }, 800);
      }
    })
  }



}

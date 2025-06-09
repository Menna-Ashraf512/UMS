import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/app/services/users/user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  AddForm = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.required]),
    birthDate: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
  });
  constructor(
    private _userServiceService: UserServiceService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  sendData(data:FormGroup){
    this._userServiceService.addUser(data.value).subscribe({
      next:(res)=>{
        this.AddForm.reset();
      },
      error:(err)=>{
        this.toastr.error(err.error.message, 'Sorry');
      },
      complete: () => {
        this.toastr.success('Hello world!', 'Success!');
      }
    })
  }
}

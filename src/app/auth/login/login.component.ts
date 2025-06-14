import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  lang:string='en'
  loginForm = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^.{6,}$/),
    ]),
  });
  constructor(
    private _authServiceService: AuthServiceService,
    private toastr: ToastrService,
    private router: Router,
    private translate:TranslateService
  ) {
  translate.setDefaultLang(this.lang)
  }

  send(data: FormGroup) {
    this._authServiceService.signIn(data.value).subscribe({
      next: (res) => {
        localStorage.setItem('userToken',res.accessToken)
        localStorage.setItem('firstName',res.firstName)
        localStorage.setItem('image',res.image)
        this.loginForm.reset();
      },
      error: (err) => {
        this.toastr.error(err.error.message, 'Sorry');
      },
      complete: () => {
        this.toastr.success('Hello world!', 'Success!');
          this.router.navigate(['/users/userList']);
      },
    });
  }

  changeLang(){
    this.lang = this.lang === "ar"?"en":"ar"
    this.translate.use(this.lang)
  }
}

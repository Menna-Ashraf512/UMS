import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NotfoundComponent } from '../shared/notfound/notfound.component';
import { TranslateModule } from '@ngx-translate/core';
const routes: Routes = [
  { path: '', component: AuthComponent, children:[
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent,title:'Login Page'},
    {path:'**',component:NotfoundComponent,title:'NotFound Page'}
    
  ]}
];

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes),
    TranslateModule
  ]
})
export class AuthModule { }

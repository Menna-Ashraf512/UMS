import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master.component';
import { RouterLink, RouterLinkActive, RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: MasterComponent, children:[
    {path:'',redirectTo:'userList',pathMatch:'full'},
    {path:'userList',component:UsersListComponent,title:'Users List page'},
    {path:'profile',component:ProfileComponent,title:'Profile page'},
    {path:'addUser',component:AddUserComponent,title:'Add page'},
    {path:'updateUser',component:UpdateUserComponent,title:'Update page'}
  ]}
];

@NgModule({
  declarations: [
    MasterComponent,
    AddUserComponent,
    UsersListComponent,
    ProfileComponent,
    UpdateUserComponent,
    SideBarComponent,

  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    NgxPaginationModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class MasterModule { }

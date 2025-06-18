import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NotfoundComponent } from './notfound/notfound.component';
import { TranslateModule } from '@ngx-translate/core';
import { UserSearchPipe } from '../pipes/user-search.pipe';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule,
    NotfoundComponent,
    TranslateModule
  ],
  exports:[
   HttpClientModule,FormsModule,ReactiveFormsModule,ToastrModule,NotfoundComponent,TranslateModule
  ]
})
export class SharedModule { 
}

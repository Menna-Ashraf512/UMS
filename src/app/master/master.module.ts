import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: MasterComponent }];

@NgModule({
  declarations: [
    MasterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MasterModule { }

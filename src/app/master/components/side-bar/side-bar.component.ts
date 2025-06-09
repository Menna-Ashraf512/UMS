import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  isSidebarClosed = false;
  userImage=localStorage.getItem('image');
  userName=localStorage.getItem('firstName');

  constructor(private router:Router){}

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }
  logOut(){
    localStorage.removeItem('userToken');
    localStorage.removeItem('image');
    localStorage.removeItem('firstName');
    // navigate login
  this.router.navigate(['/auth'])
}
}

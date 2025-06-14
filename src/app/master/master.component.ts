import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css'],
})
export class MasterComponent {
  isSidebarOpen = true;
  lang: string = 'en';
  constructor(private translate: TranslateService) {
    translate.setDefaultLang(this.lang);
    this.translate.use(this.lang);
  }
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  changeLang() {
    this.lang = this.lang === 'ar' ? 'en' : 'ar';
    this.translate.use(this.lang);
  }
}

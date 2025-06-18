import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css'],
})
export class MasterComponent {
  isSidebarOpen = true;
  lang: string = 'en';
  searchText = '';

  constructor(
    private translate: TranslateService,
    private searchService: SearchService
  ) {
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
  get direction() {
    return this.lang === 'ar' ? 'rtl' : 'ltr';
  }

onSearchChange() {
  const trimmed = this.searchText.trim();
  if (!trimmed) {
    this.searchService.setSearchTerm('');
  }
}

onEnterSearch() {
  const trimmed = this.searchText.trim();

  this.searchService.setSearchTerm(trimmed);
}
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }
    private searchText = new BehaviorSubject<string>('');
  searchTerm$= this.searchText.asObservable();

  setSearchTerm(term: string) {
    this.searchText.next(term);
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Search'
})
export class UserSearchPipe implements PipeTransform {

transform(users: any[], searchText: string): any[] {
  if (!users || !searchText?.trim()) {
    return users; 
  }

  const lowerSearch = searchText.toLowerCase().trim();
  return users.filter(user => {
    const firstName = user.firstName.toLowerCase();
    return firstName.includes(lowerSearch);
  });
}
}

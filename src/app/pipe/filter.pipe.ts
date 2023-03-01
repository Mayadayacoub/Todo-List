import { Pipe, PipeTransform } from '@angular/core';
import { Tasks } from '../Models/Tasks/Tasks';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Tasks[], searchText: string){
    if (!items) {
      return
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase()

    return items.filter(item => {
      return item.title.toLocaleLowerCase().includes(searchText);
    });
  }
}



import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/Todo';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Todo[], searchText: string) : Todo[] {
    if (!items) return [];

    if (!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter(it => {
      return it.title.toLowerCase().includes(searchText);
    });
  }
  filter: string = '';

}


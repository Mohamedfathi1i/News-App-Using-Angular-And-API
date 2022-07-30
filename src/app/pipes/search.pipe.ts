import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(news: any, term: any): any {
    if (term == '' || term == undefined) {
      return news;
    } else {
      return news.filter(function (news: any) {
        return news.title.toLowerCase().match(term.toLowerCase());
      });
    }
  }
}

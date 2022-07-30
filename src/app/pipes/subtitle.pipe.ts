import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subtitle',
})
export class SubtitlePipe implements PipeTransform {
  transform(value: string, lenght: number): any {
    if (value != null) {
      return value.substring(0, lenght) + '...';
    }
    // return "..."
  }
}

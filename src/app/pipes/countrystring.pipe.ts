import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countrystring',
})
export class CountrystringPipe implements PipeTransform {
  countryname?: String;

  transform(countrysempole: string): any {
    if (countrysempole != null) {
      switch (countrysempole) {
        case 'fr':
          this.countryname = 'France';
          break;

        case 'it':
          this.countryname = 'Italy';
          break;

        case 'gr':
          this.countryname = 'Greece';
          break;

        case 'ae':
          this.countryname = 'United Arab Emirates';
          break;

        case 'us':
          this.countryname = 'United States';
          break;

        case 'eg':
          this.countryname = 'Egypt';
          break;

        default:
          break;
      }

      return this.countryname;
    }
  }
}

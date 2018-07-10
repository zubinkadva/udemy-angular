import { Pipe, PipeTransform } from '@angular/core';

import { Prepositons } from './prepositons';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): string {
    if(!value) return null;

    return this.toTitleCase(value);
  }

  toTitleCase(str: string) {
    let strArray = str.toLowerCase().split(' ');  
    let prepositions = Prepositons.words; 

    strArray[0] = strArray[0].charAt(0).toUpperCase() + strArray[0].slice(1); 

    for(let i = 1; i < strArray.length; i++) {
      if(!prepositions.includes(strArray[i]))  
        strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1); 
    }

    return strArray.join(' ');

  }

}

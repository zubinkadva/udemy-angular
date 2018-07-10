import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tst'
})
export class TstPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string): unknown {

    if (value == null)
      return null;
    
    const strArr = value.substring(0, 180)
    if (strArr.length < 180)
      return strArr
    return strArr+'...'
  }

}

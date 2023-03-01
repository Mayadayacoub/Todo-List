import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxLength',
})


export class MaxLengthPipe implements PipeTransform {
  transform(value: string,length:number): string {
    if(value.length> length)
    return value.substring(3, length);
    return value
  }
}

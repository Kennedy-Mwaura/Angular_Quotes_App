import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateElapsed'
})
export class DateElapsedPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

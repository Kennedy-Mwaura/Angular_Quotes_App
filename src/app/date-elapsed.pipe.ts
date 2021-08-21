import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateElapsed'
})
export class DateElapsedPipe implements PipeTransform {

  transform(value: any): number {
    // retun difference in days 
    const today: Date = new Date();
    const todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const dateDifference = Math.abs(todayWithNoTime - value);
    const secondsInDay = 86400;
    let dateDifferenceSeconds = dateDifference * 0.001;
    const dateElapsed = Math.floor(dateDifferenceSeconds / secondsInDay);

    return dateElapsed;
  }

}

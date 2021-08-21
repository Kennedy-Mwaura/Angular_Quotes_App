import { ElementRef ,Directive } from '@angular/core';

@Directive({
  selector: '[appPopular]'
})
export class PopularDirective {


  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.backgroundColor = '#f5f5f5';
  }

}

import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { NgForm} from '@angular/forms';
import { Quote } from '../quote'; 

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.scss']
})
export class QuoteFormComponent implements OnInit {

  newTechQuote = new Quote(0,"","","",new Date(),0,0,false);
  @Output() addTechQuote = new EventEmitter<Quote>();

  onSubmit(form: NgForm): void {
    this.addTechQuote.emit(this.newTechQuote);

    form.resetForm();
  }
  constructor() { }

  ngOnInit(): void {
  }

}

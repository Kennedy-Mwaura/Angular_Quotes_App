import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.scss']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote!: Quote;
  @Output() isDeleted = new EventEmitter<boolean>();

  deleteQuote(deleted: boolean) {
    this.isDeleted.emit(deleted);
  }

  constructor( ) { }

  ngOnInit(): void {
  }

}

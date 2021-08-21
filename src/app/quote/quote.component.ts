import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  techQuotes:Quote[] = [
    new Quote(1, 'Ken', 'I love technology', new Date(2021, 3, 14), 12,3, false),
    new Quote(2, 'Ken', 'I love technology', new Date(2021, 5, 14), 12,3, false),
    new Quote(3, 'Ken', 'I love technology', new Date(2021, 6, 22), 12,3, false),
  ];

  popular:Quote[] = [
    new Quote(1, 'Ken', 'I love technology', new Date(2021, 3, 14), 12,3, false),
    new Quote(2, 'Ken', 'I love technology', new Date(2021, 5, 14), 12,3, false),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

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

  addNewQuote(quote: any){
    let quoteLength = this.techQuotes.length;
    let quoteObject = new Quote(quoteLength+1, quote.name, quote.quote, new Date(quote.date), quote.likes, quote.dislikes, false);

    // quote.id = quoteLength+1;
    this.techQuotes.push(quoteObject);
  }
  
  deleteTechQuotes(index:number, isDeleted:boolean){
    if(isDeleted){
      let toDelete = confirm(`Are you sure you want to delete ${this.techQuotes[index].quote}?`);
      if(toDelete){
        this.techQuotes.splice(index, 1);
      }
    }
  }


  
  showQuoteDetails(index: number){
    this.techQuotes[index].showQuoteDescription = !this.techQuotes[index].showQuoteDescription;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Quote } from '../quote';
import {ModalDirective} from 'angular-bootstrap-md';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class  QuoteComponent implements OnInit {
  techQuotes:Quote[] = [
    new Quote(1, 'Ken','Zoo', 'I love technology', new Date(2021, 3, 14), 12,3, false),
    new Quote(2, 'Ken','Zoo', 'I love technology', new Date(2021, 5, 14), 12,3, false),
    new Quote(3, 'Ken','Zoo', 'I love technology', new Date(2021, 6, 22), 12,3, false),
    new Quote(4, 'Ken','Zoo', 'I love technology', new Date(2021, 8, 14), 12,3, false),
    new Quote(5, 'Ken','Zoo', 'I love technology', new Date(2021, 9, 14), 12,3, false),
    new Quote(6, 'Ken','Zoo', 'I love technology', new Date(2021, 10, 14), 12,3, false),
    new Quote(7, 'Ken','Zoo', 'I love technology', new Date(2021, 11, 14), 12,3, false),
  ];

  popular:Quote[] = [
    new Quote(1, 'Ken', 'Zoo','I love technology', new Date(2021, 3, 14), 12,3, false),
    new Quote(2, 'Ken', 'Zoo','I love technology', new Date(2021, 5, 14), 12,3, false),
  ];

  addNewQuote(quote: any){
    let quoteLength = this.techQuotes.length;
    let quoteObject = new Quote(quoteLength+1, quote.userName,quote.quoteAuthor, quote.quote, new Date, quote.upVote, quote.downVote, false);

    // quote.id = quoteLength+1;
    this.techQuotes.push(quoteObject);
  }
  
  deleteTechQuotes(isDeleted:boolean,index:number){
    if(isDeleted){
      let toDelete = confirm(`Are you sure you want to delete ${this.techQuotes[index].quote}?`);
      if(toDelete){
        this.techQuotes.splice(index, 1);
      }
    }
  }

  addLike(index:number){
    this.techQuotes[index].upVote += 1;
  }

  addDislike(index:number){
    this.techQuotes[index].downVote += 1;
  }
  mostLike(index:number){
    let mostLike = this.techQuotes[index].upVote;
    let mostDislike = this.techQuotes[index].downVote;
    if(mostLike > mostDislike){
      return true;
    }else{
      return false;
    }
  }
  mostPopularQuote(){

    this.popular.splice(0,this.popular.length);
  
    let largest=this.techQuotes[0].upVote;
    let number=null;
    for (let i=0;i<this.techQuotes.length;i++){
      number=this.techQuotes[i].upVote;
  
      largest=Math.max(largest,number)
    }
    
    for (let i=0;i<this.techQuotes.length;i++){
      
      if(this.techQuotes[i].upVote===largest){
        this.popular.push(this.techQuotes[i]);
      }
    }
  
  }
  


  mostDislike(index:number){
    let mostLike = this.techQuotes[index].upVote;
    let mostDislike = this.techQuotes[index].downVote;
    if(mostLike < mostDislike){
      return true;
    }else{
      return false;
    } 
  }
  
  showQuoteDetails(index: number){
    this.techQuotes[index].showQuoteDescription = !this.techQuotes[index].showQuoteDescription;
  }

  @ViewChild('quoteAdd') public quoteAdd!: ModalDirective;
  constructor() { }

  ngOnInit(): void {
  }

}

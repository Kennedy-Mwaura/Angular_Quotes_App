export class Quote {
    id: number;
    userName: string;
    quote: string;
    showQuoteDescription: boolean;
    dateAdded = new Date; 
    upVote: number;
    downVote: number;
    popularity: boolean; 
    
    constructor(id: number, UserName: string, quote: string, dateAdded: Date, 
        upVote: number, downVote: number, popularity: boolean) {
        this.id = id;
        this.userName = UserName;
        this.quote = quote;
        this.showQuoteDescription = false;
        this.dateAdded = dateAdded;
        this.upVote = upVote;
        this.downVote = downVote;
        this.popularity = popularity;
    };
}


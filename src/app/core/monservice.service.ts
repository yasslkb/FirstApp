import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonserviceService {
info: {
    Nom: string,
    Tel: number,
  } = {
      Nom: 'yassine',
      Tel: 78786686,
    };
  
  comments = [
    { date: new Date(), message: 'a' },
    { date: new Date(), message: 'b' },
    { date: new Date(), message: 'c' },
    
  ];

  addComment(c: { date: Date; message: string; }) {
    c.date = new Date();
    this.comments.push(c);
  }
  
  public getInfo() {
    return this.info;
  }
  public getComments() {
    return this.comments;
  }
  

  constructor() { }
}

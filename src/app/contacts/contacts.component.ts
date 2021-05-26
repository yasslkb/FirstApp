import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Type } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
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

  commentaire = { date:new Date() , message: '' };
   
 /* onAddCommentaire() {
    this.commentaire.date = new Date();
    this.comments.push(this.commentaire);
    this.commentaire = { date: new Date(), message: '' };
  };
*/
  
  onAddCommentaire1(f:NgForm){
    this.commentaire.date = new Date();
    this.comments.push(f.value);
    this.commentaire = { date: new Date(), message: '' };

   
  } 


  constructor() { }

  ngOnInit(): void {
  }

}


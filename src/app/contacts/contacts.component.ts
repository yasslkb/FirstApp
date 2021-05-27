import { nullSafeIsEquivalent, ThrowStmt } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Type } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MonserviceService } from '../core/monservice.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
 

  
   
 /* onAddCommentaire() {
    this.commentaire.date = new Date();
    this.comments.push(this.commentaire);
    this.commentaire = { date: new Date(), message: '' };
  };
*/
  //je declare des attributs dans je vais mettre les donnes que je vais recupere du service :
   infos: any;
  comments: any = [];
  
  

  constructor(private monservice: MonserviceService) {
    this.infos = this.monservice.getInfo();
    this.comments = this.monservice.getComments();
  }
  commentaire!: { date: Date; message: String; };
  
  onAddCommentaire1(c:{date:Date,message:string}) {
    this.monservice.addComment(c);
    this.commentaire.message = '';
    this.comments = this.monservice.getComments();
  }


  ngOnInit(): void {
  }

}


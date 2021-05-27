import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) {
    
  }
  
  Searche(motCle: string, size: number, currentPage: number) {
   
   return  this.http.get(
      "https://pixabay.com/api/?key=21817322-5312305701ba46a1a6107e0eb&q=" +
      motCle
      + "&per_page="+size+"&page="+currentPage, { observe: 'body', responseType: 'json' }
      )
  };
 


}


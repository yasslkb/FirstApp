import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GalleryService } from '../core/gallery.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  motCle: string = "";
  pagePhotos: any;
  currentPage: number=1;
  size: number = 5;
  totalPages: number = 0;
  pages: Array<number> = [];

  constructor(private gallery:GalleryService) { }

  ngOnInit(): void {
  }


  onSearch(fdata:any) {
    
       this.gallery.Searche(this.motCle,this.size,this.currentPage).subscribe(data => {
        
        this.pagePhotos = data;
        this.totalPages = this.pagePhotos.totalHits / this.size;
        if (this.pagePhotos.totalHits % this.size != 0) ++this.totalPages;
        this.pages = new Array(this.totalPages);
      

       }, err => {
        
         console.error(err);
         
        
       });
    
    

  }
  goTOpage(i: number) {
    this.currentPage = i + 1;
    this.onSearch({ motCle: this.motCle })
    
  }
}

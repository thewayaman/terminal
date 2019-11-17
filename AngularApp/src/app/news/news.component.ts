import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {


  marticles: any;//variable to store JSON data

  constructor(private newsapi: NewsApiService) {
    console.log('app component constructor called');
  }

  ngOnInit() {

    
/*     this.newsapi.initArticles()
      .subscribe(data => {

        this.marticles = data['articles'];//Extract article out of the JSON object 
        console.log(this.marticles);
      });
 */

this.displayList();
  }

  displayList(){
    this.newsapi.initArticles()
      .subscribe(data => {

        this.marticles = data['articles'];//Extract article out of the JSON object 
        console.log(this.marticles);
      });

  }
}

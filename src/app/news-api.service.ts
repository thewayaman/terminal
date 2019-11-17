import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  baseUrl:string='https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c09984e8cfd34f47a2788984173a7026';
  api_key = 'c09984e8cfd34f47a2788984173a7026';
  
  constructor(private http:HttpClient) { }
  initSources(){
     return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key);
  }
  initArticles(){
  // return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key);
   return this.http.get<any>(this.baseUrl);
  }
  getArticlesByID(source: String){
   return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
   
  }
}

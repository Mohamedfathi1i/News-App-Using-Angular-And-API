import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  newscontainer: any;
  p: number = 1;
  country:string[] = ["eg","it","gr","ae","us","fr"];
  term:any;
  constructor(private _NewsService: NewsService) {
    this.changecountry("eg");
  }

  ngOnInit(): void {}

  changecountry(x:any) {
    this._NewsService.getnews(x).subscribe((n) => {
      for (let i = 0; i < n.articles.length; i++) {
        if (n.articles[i].urlToImage == null) {
          n.articles[i].urlToImage = './assets/img/1.webp';
        }
      }

      this.newscontainer = n.articles;
    });
  }


  
}

import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css'],
})
export class TechnologyComponent implements OnInit {
  title:any;
  description:any;
  category:any;
  image:any;
  constructor(_NewsService: NewsService) {}

  ngOnInit(): void {}


  displayform(frm:any){

    alert(frm.value.title);
  }
}

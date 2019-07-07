import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 dataAboutMe:any
 title:string
 details:string
 status:string
  constructor( private data:ServiceService) { }

  ngOnInit() {
    this.dataAboutMe = this.data.aboutMe()
    this.title = this.dataAboutMe.filter( x => x.title)
    console.log(this.dataAboutMe.filter( x => x.title))
  }

}

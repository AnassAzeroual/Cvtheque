import { Component, OnInit } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
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
  jobTitle: any;
  etat: any;
  desc: any;
  constructor( private data:ServiceService) { }

  ngOnInit() {
    this.dataAboutMe = this.data.aboutMe()
    this.title = this.dataAboutMe["0"]['title']
    this.details = this.dataAboutMe["0"]['desc']
    this.status = this.dataAboutMe["0"]['etat']
  }

}

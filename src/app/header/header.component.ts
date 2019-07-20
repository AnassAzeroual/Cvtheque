import { Component, OnInit } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { ServiceService } from '../services/service.service';
import Typed from 'typed.js';

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

    const options = {
      strings: [
       'Bienvenu(e)',
       'je me présent : Je suis Développeur Analyste',
       'je me présent : J\'ai actuellement plus de 2 ans en développement',
       'Mon objectif est : Réaliser des projets et satisfaire les clients',
       'Je serai honoré de votre réponse positive'
      ],
      typeSpeed: 70,
      backSpeed: 0,
      smartBackspace: true,
      loop: false
    };
    const typed = new Typed('#typed_element', options);
  }

}

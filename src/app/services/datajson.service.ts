import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatajsonService {
  private dataExperiences = [
    {
      id_obj: '1',
      dateD : '2018-02-02',
      dateE : '2018-02-03',
      nameS : 'Educa',
      localS : 'Casablanca, Tamaris',
      logoS : '../../../assets/img/logoS/agenda.png',
      descr : 'descriptions..',
      post  : 'Post ...',
      link  : 'https://hello',
      contrat : 'CDI',
      techno: [
        {name:'Angular',url:"../../../assets/img/logoS/favorite.png"},
        {name:'TypeScript',url:"../../../assets/img/logoS/mug.png"},
        {name:'PHP',url:"../../../assets/img/logoS/profits.png"},
        {name:'Rest full APIs',url:"../../../assets/img/logoS/idea.png"}
         ],
      links: [
          {name:'Project 1',url:"www.googl.com"},
          {name:'Project 2',url:"www.youtube.com"},
          {name:'Project 3',url:"www.facebook.com"},
          {name:'Project 4',url:"www.linkedin.com"}
           ],
    },
    {
        id_obj: '2',
        dateD : '2018-02-02',
        dateE : '2018-02-03',
        nameS : 'Educa',
        localS : 'Casablanca, Tamaris',
        logoS : '../../../assets/img/logoS/mug.png',
        descr : 'descriptions..',
        post  : 'Post ...',
        link  : 'https://hello',
        contrat : 'CDI',
        techno: [
          {name:'Angular',url:"../../../assets/img/logoS/favorite.png"},
          {name:'TypeScript',url:"../../../assets/img/logoS/mug.png"},
          {name:'PHP',url:"../../../assets/img/logoS/profits.png"},
          {name:'Rest full APIs',url:"../../../assets/img/logoS/idea.png"}
           ],
        links: [
            {name:'Project 1',url:"www.googl.com"},
            {name:'Project 2',url:"www.youtube.com"},
            {name:'Project 3',url:"www.facebook.com"},
            {name:'Project 4',url:"www.linkedin.com"}
             ],
      }
  ];
  constructor() { }
  setDataJson(){
    return this.dataExperiences
  }
}

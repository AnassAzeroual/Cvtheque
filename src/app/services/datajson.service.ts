import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DatajsonService {

  private jobTitle: string = "Analyste Développeur";
  private status: string = "disponible";
  private details: string = "La curiosité de savoir c'est le secret du succès motivé, créatif, enthousiaste et perspicace";
  private dataExperiences = [
    {
      id_obj: '1',
      type_obj: "exp",
      dateD : '2018-10-08',
      dateE : '2019-04-30',
      nameS : 'Educa',
      localS : 'Casablanca, Tamaris',
      logoS : '../../../assets/img/logoS/agenda.png',
      descr : 'descriptions..',
      post  : 'Post ...',
      link  : 'https://hello',
      contrat : 'CDI',
      techno: [
        {name:'Angular',url:"../../../assets/img/logoS/angular.png"},
        {name:'TypeScript',url:"../../../assets/img/logoS/js.png"},
        {name:'PHP',url:"../../../assets/img/logoS/php.png"},
        {name:'Rest full APIs',url:"../../../assets/img/logoS/api.png"}
         ],
      links: [
          {name:'Project 1',url:"www.googl.com"},
          {name:'Project 2',url:"www.youtube.com"},
          {name:'Project 3',url:"www.facebook.com"},
           ],
    },
    {
        id_obj: '2',
        type_obj: "exp",
        dateD : '2018-02-02',
        dateE : '2018-02-03',
        nameS : 'DSI',
        localS : 'Casablanca, Tamaris',
        logoS : '../../../assets/img/logoS/mug.png',
        descr : 'descriptions..',
        post  : 'Post ...',
        link  : 'https://hello',
        contrat : 'CDI',
        techno: [
          {name:'Angular',url:"../../../assets/img/logoS/angular.png"},
          {name:'TypeScript',url:"../../../assets/img/logoS/js.png"},
          {name:'PHP',url:"../../../assets/img/logoS/php.png"},
          {name:'Rest full APIs',url:"../../../assets/img/logoS/api.png"}
           ],
        links: [
            {name:'Project 1',url:"www.googl.com"},
            {name:'Project 2',url:"www.youtube.com"},
            {name:'Project 3',url:"www.facebook.com"},
            {name:'Project 4',url:"www.linkedin.com"}
             ],
      }
      ,
    {
        id_obj: '3',
        type_obj: "for",
        dateD : '2018-02-02',
        dateE : '2018-02-03',
        nameS : 'Thaib El Khemal',
        localS : 'Casablanca, Tamaris, Dar Bouazza',
        logoS : '../../../assets/img/logoS/mug.png',
        descr : 'descriptions..',
        post  : 'Post ...',
        link  : 'https://hello',
        contrat : 'Attestation BAC',
        techno: [
          {name:'PHP',url:"../../../assets/img/logoS/php.png"},
          {name:'Rest full APIs',url:"../../../assets/img/logoS/api.png"}
           ],
        links: [
            {name:'Project 1',url:"www.googl.com"},
            {name:'Project 2',url:"www.linkedin.com"}
             ],
      }
  ];
  private dataAboutMe = [
    {
      id: "1",
      title: this.jobTitle,
      etat: this.status,
      desc: this.details,
    }
  ];
  constructor() { }
  setDataJson(){
    return this.dataExperiences
  }
   getDataAboutMe(){
    return this.dataAboutMe
  }
}

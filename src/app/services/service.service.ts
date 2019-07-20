import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private jobTitle: string = "Analyste Développeur";
  private status: string = "disponible";
  private details: string = "La curiosité de savoir c'est le secret du succès motivé, créatif, enthousiaste et perspicace";
 
  
  private dataAboutMe = [
    {
      id: "1",
      title: this.jobTitle,
      etat: this.status,
      desc: this.details,
    }
  ];
  constructor(private http:HttpClient) {}


 getAllData(targetType: string) {
    return this.http.post("http://localhost:3000/experiences/",{"data": targetType})
  }
  
  getDataByID(id: string) {
    return this.http.post("http://localhost:3000/details/",{"idObj": id})
  }

   aboutMe(){
    return this.dataAboutMe
  }
}
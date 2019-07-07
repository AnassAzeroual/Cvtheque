import { Injectable } from '@angular/core';
import { DatajsonService } from './datajson.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private selectedData: any;
  dataExperiences: any;
  dataaboutMe: any;

  constructor(private data: DatajsonService) {
    this.dataExperiences = data.setDataJson();
    // console.log(this.data.getDataAboutMe())
    this.dataaboutMe = data.getDataAboutMe();
  }
  getAllData(targetType: string) {
    return this.dataExperiences.filter( x => x.type_obj == targetType);
  }

  setDataByID(id: string) {
    this.selectedData = this.dataExperiences.find( x => x.id_obj == id);
  }
  getDataByID() {
    return this.selectedData;
  }
   aboutMe(){
    return this.dataaboutMe
  }
}

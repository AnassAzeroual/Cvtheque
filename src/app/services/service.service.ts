import { Injectable } from '@angular/core';
import { DatajsonService } from './datajson.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private selectedData: any;
  dataExperiences: any;

  constructor(private data: DatajsonService) {
    this.dataExperiences = data.setDataJson();
  }
  getAllData() {
    return this.dataExperiences;
  }

  setDataByID(id: string) {
    this.selectedData = this.dataExperiences.find( x => x.id_obj == id);
  }
  getDataByID() {
    return this.selectedData;
  }
}

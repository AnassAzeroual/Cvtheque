import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  dataExperiences: any;

  constructor(private srv:ServiceService) { }

  ngOnInit() {
    this.dataExperiences = this.srv.getAllData("for");
  }

}

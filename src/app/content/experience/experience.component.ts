import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
 private dataExperiences = [];
  constructor(private srv:ServiceService) { }

  ngOnInit() {
    this.dataExperiences = this.srv.getAllData();
  }

}

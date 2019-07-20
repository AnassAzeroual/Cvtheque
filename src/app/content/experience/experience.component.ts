import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
 private dataExperiences:Object;
  constructor(private srv:ServiceService) { }

  ngOnInit() {
    this.srv.getAllData("exp").subscribe(experiences => {
      this.dataExperiences = experiences
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  obj: any;
  danaAnimated: any;
  

  constructor(private route: ActivatedRoute,private srv:ServiceService) { }

  ngOnInit() {
    this.get_params();
    this.obj.subscribe(res => {
      this.obj = res[0]
    })

  }

  private get_params() {
    this.route.params.subscribe(params => { this.obj = this.srv.getDataByID(params['id']) });
  }

}

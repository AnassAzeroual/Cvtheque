import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  private Param_id_user: any;
  private obj: any;

  constructor(private route: ActivatedRoute,private srv:ServiceService) { }

  ngOnInit() {
    this.get_params();
    this.srv.setDataByID(this.Param_id_user);
    this.obj = this.srv.getDataByID()
  }

  private get_params() {
    this.route.params.subscribe(params => { this.Param_id_user = params['id']; });
  }

}

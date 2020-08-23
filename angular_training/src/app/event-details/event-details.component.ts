import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  event : any;
  constructor(private api:ApiService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    this.event = this.api.getEvent(id);
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  events:any[];
  constructor(private api : ApiService){
  }
  ngOnInit(): void {
    this.events = this.api.getEvents();
  }
}

import { Component, OnInit, Input } from '@angular/core';
declare let toastr

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss']
})
export class EventThumbnailComponent implements OnInit {

  @Input() _event: any;
  constructor() { }
  getDetails(event){
    console.log(event);
    
  }
  ngOnInit(): void {
  }

}

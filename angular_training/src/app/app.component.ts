import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data_event = {
    id:1,
    name :'learn angular',
    date : '4/4/2004',
    time : '13:44',
    price:55.55,
    image: '',
    location : {
      address : '2234 LOT',
      city : 'fuck',
      country : 'yourself'
    }
  }; 
}

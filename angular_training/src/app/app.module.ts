import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { ApiService } from './service/api.service';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventsListComponent } from './events-list/events-list.component';
import { CreateEventComponent } from './create-event/create-event.component'

@NgModule({
  declarations: [
    AppComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    EventsListComponent,
    CreateEventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

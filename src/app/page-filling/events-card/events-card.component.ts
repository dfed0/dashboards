import { Component, input } from '@angular/core';

@Component({
  selector: 'app-events-card',
  imports: [],
  templateUrl: './events-card.component.html',
  styleUrl: './events-card.component.css'
})
export class EventsCardComponent {
eventNames = input<string[]>();
  events = 3;
  addDashboards() {
    this.events += 3;
    console.log(this.eventNames());
  }
}

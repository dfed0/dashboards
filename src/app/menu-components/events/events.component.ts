import { Component, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterService } from '../../services/router.service';
import { ActivatedRoute } from '@angular/router';
import { EventsCardComponent } from "../../page-filling/events-card/events-card.component";

@Component({
  selector: 'app-events',
  imports: [EventsCardComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent implements OnInit, OnChanges{
  events = ['hello', 'ok', 'nice', 'okk']
private routerService = inject(RouterService)
constructor(private route: ActivatedRoute){
}
ngOnInit() {
  this.route.url.subscribe(urlSegments => {
    const path = urlSegments.map(segment => segment.path)
    this.routerService.takeCurrentPath(path[0])
  })

    
  
}
ngOnChanges(changes: SimpleChanges): void {
  console.log('events: ', changes)
}
}

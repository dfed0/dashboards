import { Component, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterService } from '../../services/router.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-time-trouble',
  imports: [],
  templateUrl: './time-trouble.component.html',
  styleUrl: './time-trouble.component.css'
})
export class TimeTroubleComponent implements OnInit, OnChanges{
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
  console.log('time-trouble: ', changes)
}
}

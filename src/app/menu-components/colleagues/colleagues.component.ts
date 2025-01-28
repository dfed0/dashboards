import { Component, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterService } from '../../services/router.service';

@Component({
  selector: 'app-colleagues',
  imports: [],
  templateUrl: './colleagues.component.html',
  styleUrl: './colleagues.component.css'
})
export class ColleaguesComponent implements OnInit, OnChanges{
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
  console.log('colleagues: ', changes)
}
}

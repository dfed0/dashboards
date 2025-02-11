import { Component, computed, inject, OnChanges, OnInit, signal, SimpleChanges} from '@angular/core';
import { UiService } from '../../services/ui.service';
import { BehaviorSubject } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { RouterService } from '../../services/router.service';
import { DefaultButtonDirective } from '../../../directives/default-button.directive';

@Component({
  selector: 'app-main-page',
  imports: [DefaultButtonDirective],
  //  animations: [trigger('mainPageState', [
  //     state('text-area-static', style({
  //       // 'margin-left': '0'
  //       // 'height': 'calc(100vh - var(--top-menu) - var(--bottom-menu))',
  //       // 'width': '0'
  //     'width': '100vw',
  //     'transform': 'translateX(calc(-100vw + var(--right-menu)))'
  //     })),
  //     state('text-area-active-static', style({
  //       // 'margin-left': 'var(--left-menu)'
  //       //  'height': 'calc(100vh - var(--top-menu) - var(--bottom-menu))',
  //       // 'width': 'calc(100vw - var(--left-menu) - var(--right-menu))']
  //     'width': 'calc(100vw - var(--margin-left-text-area))',
  //     'transform': 'translateX(0)'
  //     })),
  //     state('text-area', style({
  //       // 'margin-left': '0'
  //       // '--left-menu': '0',
  //       // '--right-menu': '0'
  //     'width': '100vw',
  //     'transform': 'translateX(calc(-100vw + var(--right-menu)))'
  //     })),
  //     state('text-area-active', style({
  //       // 'margin-left': 'var(--left-menu)'
  //       // 'var(--left-menu)': '1vw',
  //       // 'var(--right-menu)': '66vw'
  //       'width': 'calc(100vw - var(--margin-left-text-area))',
  //       'transform': 'translateX(0)'
  //     })),
  //     transition("text-area-static => text-area-active-static", animate(300)),
  //     transition("text-area-active-static => text-area-static", animate(300)),
  //     transition("text-area => text-area-active", animate(300)),
  //     transition("text-area-active => text-area", animate(300)),
      
      
  //     ])],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit, OnChanges{
  private routerService = inject(RouterService)
  constructor(private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.route.url.subscribe(urlSegments => {
      const path = urlSegments.map(segment => segment.path)
      this.routerService.takeCurrentPath(path[0])
    })
      
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('main-page: ', changes)
  }
  

}

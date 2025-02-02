import { AfterViewInit, Component, effect, ElementRef, HostListener, inject, input, Input, OnChanges, OnInit, signal, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterModule, RouterOutlet } from '@angular/router';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { HeaderComponent } from "./header/header.component";
import { MenuComponent } from './menu-components/menu/menu.component';
import { UiService } from './services/ui.service';
import { TimersService } from './services/timers.service';
import { RouterService } from './services/router.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// почистить таймеры!!!
@Component({
  selector: 'app-root',
  animations: [trigger('mainPageState', [
        state('text-area-static', style({
          // 'margin-left': '0'
          // 'height': 'calc(100vh - var(--top-menu) - var(--bottom-menu))',
          // 'width': '0'
        'width': '100vw',
        'transform': 'translateX(calc(-100vw + var(--right-menu)))'
        })),
        state('text-area-active-static', style({
          // 'margin-left': 'var(--left-menu)'
          //  'height': 'calc(100vh - var(--top-menu) - var(--bottom-menu))',
          // 'width': 'calc(100vw - var(--left-menu) - var(--right-menu))']
        'width': 'calc(100vw - var(--margin-left-text-area))',
        'transform': 'translateX(0)'
        })),
        state('text-area', style({
          // 'margin-left': '0'
          // '--left-menu': '0',
          // '--right-menu': '0'
        'width': '100vw',
        'transform': 'translateX(calc(-100vw + var(--right-menu)))'
        })),
        state('text-area-active', style({
          // 'margin-left': 'var(--left-menu)'
          // 'var(--left-menu)': '1vw',
          // 'var(--right-menu)': '66vw'
          'width': 'calc(100vw - var(--margin-left-text-area))',
          'transform': 'translateX(0)'
        })),
        transition("text-area-static => text-area-active-static", animate(300)),
        transition("text-area-active-static => text-area-static", animate(300)),
        transition("text-area => text-area-active", animate(300)),
        transition("text-area-active => text-area", animate(300)),
        
        
        ])],
  imports: [RouterOutlet, RouterModule, HeaderComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnChanges{
  firestore: Firestore = inject(Firestore)
  items$: Observable<any[]>
  btnEvent = new BehaviorSubject<any>(false)
  uiService = inject(UiService)
  private routerService = inject(RouterService)
  // menuAppearance = new BehaviorSubject(null)
  private timersService = inject(TimersService)
  @HostListener('window:scroll', ['$event']) // чекнуть что это
onScroll(){ // ?
  this.uiService.changePosition(window.scrollY)
  // if(window.scrollY > )
}

header = {height: 0, width: 0}
scroll = new BehaviorSubject({
    viewport: 0,
  })
mainPage = new BehaviorSubject(this.scroll.getValue().viewport > this.header.height? 'text-area' : 'text-area-static')
mainPageState = this.mainPage.getValue()

onAnimate(){


  if(this.mainPageState === 'text-area' || this.mainPageState === 'text-area-active') {
    this.mainPageState === 'text-area' ? this.mainPageState = 'text-area-active' : this.mainPageState = 'text-area'


} else if(this.mainPageState === 'text-area-static' || this.mainPageState === 'text-area-active-static') {
  this.mainPageState === 'text-area-static' ? this.mainPageState = 'text-area-active-static' : this.mainPageState = 'text-area-static'

} else {
 
  return
}
}
  constructor(private route: Router){
    const aCollection = collection(this.firestore, 'team-dashboard')
    this.items$ = collectionData(aCollection)
    this.items$.subscribe({
      next: value => console.log(value)
    })
      this.btnEvent.subscribe(value => {
          this.uiService.elementAdd('menu', {button: value})
        })
        this.uiService.element.subscribe(value => {
          this.uiService.paddingTextArea(value['menu']['button'])
          // this.menuAppearance.next(this.uiService.element.getValue()['menu']['button'])
          Object.assign(this.header, value['header'])
          console.log('app subscribe')

      })
      this.uiService.scrollPosition.subscribe((value) => {
        this.scroll.next({viewport: value})
        this.mainPage.next(this.scroll.getValue().viewport > this.header.height? 'text-area' : 'text-area-static')
      })
      this.uiService.events.subscribe((value) => {
        if(value.includes('menuClick')) {
            this.onAnimate()
            console.log('app Animation')
          }
      })
  }
 ngOnInit() {
  this.routerService.takeAllPages([...this.route.config].filter(object => object.children)[0].children?.map(object => object.path))
  // avoid duplication
  // this.routerService.
  console.log('app INIT')
  
 }
 ngOnChanges(changes: SimpleChanges) {
   console.log('app: ', changes)
 }
  eventConsume(event: string) {
    this.uiService.eventHandler(event)
    this.uiService.elementAdd('menu', {button: true} )
  const currentValue = this.btnEvent.getValue()
   this.timersService.timerAdd(301, !currentValue).then((result) => {
      this.uiService.eventHandler(event, true)
      this.btnEvent.next(result)
    }) 
  // this.timersService.timerAdd(301, !currentValue)
  // this.timersService.currentTimer.subscribe(result => {
  //   if(result !== null) {
  //     this.uiService.eventHandler(event, true)
  //   this.btnEvent.next(result)
  //   }

  // })
    

   
  }
}

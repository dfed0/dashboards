import { Component, computed, effect, inject, input, OnChanges, OnInit, output, signal, SimpleChanges} from '@angular/core';
import { UiService } from '../../services/ui.service';
import { MenuLinksComponent } from "../../menu-links/menu-links.component";
import { animate, state, style, transition, trigger } from '@angular/animations';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { NgFor } from '@angular/common';
import { RouterService } from '../../services/router.service';

@Component({
  selector: 'app-menu',
  imports: [MenuLinksComponent, NgFor],
  animations: [trigger('menuState', [
    state('menu-static', style({
      // 'margin-left': '0'
      // 'height': 'calc(100vh - var(--top-menu) - var(--bottom-menu))',
      // 'width': '0'
    'transform': 'translateX(calc(-100vw + var(--right-menu)))'
    })),
    state('menu-active-static', style({
      // 'margin-left': 'var(--left-menu)'
      //  'height': 'calc(100vh - var(--top-menu) - var(--bottom-menu))',
      // 'width': 'calc(100vw - var(--left-menu) - var(--right-menu))'
    'transform': 'translateX(0)'
    })),
    state('menu', style({
      // 'margin-left': '0'
      // '--left-menu': '0',
      // '--right-menu': '0'
    'transform': 'translateX(calc(-100vw + var(--right-menu)))'
    })),
    state('menu-active', style({
      // 'margin-left': 'var(--left-menu)'
      // 'var(--left-menu)': '1vw',
      // 'var(--right-menu)': '66vw'
      'transform': 'translateX(0)'
    })),
    // transition("menu-static => menu-active-static", animate(300)),
    transition("menu-active-static => menu-static", animate(300)),
    // transition("menu => menu-active", animate(300)),
    transition("menu-active => menu", animate(300)),
    transition("void => *", [
      style({
        'transform': 'translateX(calc(-100vw + var(--right-menu)))'
      }),
      animate(300)])
    ])],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{

  clickEvent = output<string>()
  event(event: string){
this.clickEvent.emit(event)
  }
  pages: BehaviorSubject<string[]> = new BehaviorSubject([''])
  private routerService = inject(RouterService)
  private uiService = inject(UiService)
  header = {height: 0, width: 0}
  scroll = new BehaviorSubject({
    viewport: 0,
  })
  menu = new BehaviorSubject(this.scroll.getValue().viewport > this.header.height? 'menu' : 'menu-static')
  menuState = this.menu.getValue()
  onAnimate(){
    if(this.menuState === 'menu' || this.menuState === 'menu-active') {
      this.menuState === 'menu' ? this.menuState = 'menu-active' : this.menuState = 'menu'
   
  } else if(this.menuState === 'menu-static' || this.menuState === 'menu-active-static') {
    this.menuState === 'menu-static' ? this.menuState = 'menu-active-static' : this.menuState = 'menu-static'
 
  } else {

    return
  }
  }

  constructor() {
this.uiService.scrollPosition.subscribe((value) => {
  this.scroll.next({viewport: value})
  this.menu.next(this.scroll.getValue().viewport > this.header.height? 'menu' : 'menu-static')
})
this.uiService.element.subscribe((value) => {
    Object.assign(this.header, value['header'])
    console.log('menu subscribe')
    

})
this.uiService.events.subscribe((value) => {
  if(value.includes('menuClick')) {
      this.onAnimate()
    }
})
this.routerService.pages.subscribe((value) => {
  // console.log('router pages: ', value)
  this.pages.next(value.filter(page => page !== this.routerService.currentPath.getValue()))
// value.map(path => path !== value)
// this.pages.next()
})
// this.pages.subscribe((value) => {
//   console.log('LOG: ', value)
// })
// this.routerService.currentPath.subscribe(value => {
//   const path = value === 'home' ? [...this.pages.getValue()]: [...this.pages.getValue()].filter(path => path !== value)
//   this.pages.next(path)
// })
  }
 ngOnInit() {
    //  console.log('menu: initialized')
 }
  
  
 
  onClick = output<string>()
}





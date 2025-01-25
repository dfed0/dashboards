import { Component, computed, effect, inject, input, signal} from '@angular/core';
import { UiService } from '../services/ui.service';
import { MenuLinksComponent } from "../menu-links/menu-links.component";
import { animate, state, style, transition, trigger } from '@angular/animations';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-menu',
  imports: [MenuLinksComponent],
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
      animate(300)] )
    
    ])],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent{
  private uiService = inject(UiService)

  header = {height: 0, width: 0}
  scroll = new BehaviorSubject({
    viewport: 0,
  })
  menu = new BehaviorSubject(this.scroll.getValue().viewport > this.header.height? 'menu' : 'menu-static')
  menuState = this.menu.getValue()
  onAnimate(){
    console.log(this.menuState)
    if(this.menuState === 'menu' || this.menuState === 'menu-active') {
      this.menuState === 'menu' ? this.menuState = 'menu-active' : this.menuState = 'menu'
    console.log('blyaa')

  } else if(this.menuState === 'menu-static' || this.menuState === 'menu-active-static') {
    this.menuState === 'menu-static' ? this.menuState = 'menu-active-static' : this.menuState = 'menu-static'
    console.log('blyab')

  } else {
    console.log('blya')
    return
  }
  }

  constructor() {
this.uiService.scrollPosition.subscribe((value) => {
  this.scroll.next({viewport: value})
  this.menu.next(this.scroll.getValue().viewport > this.header.height? 'menu' : 'menu-static')
})
this.uiService.element.subscribe((value) => {
  console.log('menu')
    Object.assign(this.header, value['header'])
    if(value['menu']['clickEvent'] === 'clicked') {
      this.onAnimate()
      console.log('ok')
    }

})
  }
  
  // animationStarted(event: any){
  //   // this.onAnimate()
  //   // console.log(event)
  // }
  // ot(){
  //   console.log(this.menu(), this.scroll().viewport, this.header.height)
  // }
 
}





// import { Component, computed, effect, inject, input, signal} from '@angular/core';
// import { UiService } from '../services/ui.service';
// import { MenuLinksComponent } from "../menu-links/menu-links.component";
// import { animate, state, style, transition, trigger } from '@angular/animations';
// import { BehaviorSubject, ReplaySubject } from 'rxjs';

// @Component({
//   selector: 'app-menu',
//   imports: [MenuLinksComponent],
//   animations: [trigger('menuState', [
//     state('menu-static', style({
//       // 'margin-left': '0'
//       // 'height': 'calc(100vh - var(--top-menu) - var(--bottom-menu))',
//       // 'width': '0'
//     'transform': 'translateX(calc(-100vw + var(--right-menu)))'
//     })),
//     state('menu-active-static', style({
//       // 'margin-left': 'var(--left-menu)'
//       //  'height': 'calc(100vh - var(--top-menu) - var(--bottom-menu))',
//       // 'width': 'calc(100vw - var(--left-menu) - var(--right-menu))'
//     'transform': 'translateX(0)'
//     })),
//     state('menu', style({
//       // 'margin-left': '0'
//       // '--left-menu': '0',
//       // '--right-menu': '0'
//     'transform': 'translateX(calc(-100vw + var(--right-menu)))'
//     })),
//     state('menu-active', style({
//       // 'margin-left': 'var(--left-menu)'
//       // 'var(--left-menu)': '1vw',
//       // 'var(--right-menu)': '66vw'
//       'transform': 'translateX(0)'
//     })),
//     transition("menu-static => menu-active-static", animate(1000)),
//     transition("menu-active-static => menu-static", animate(1000)),
//     transition("menu => menu-active", animate(1000)),
//     transition("menu-active => menu", animate(1000))
    
//     ])],
//   templateUrl: './menu.component.html',
//   styleUrl: './menu.component.css'
// })
// export class MenuComponent{
//   private uiService = inject(UiService)

//   header = {height: 0, width: 0}
//   scroll = signal({
//     viewport: 0,
//   })
//   menu = computed(() => this.scroll().viewport > this.header.height? 'menu' : 'menu-static')
//   menuState = this.menu()
//   onAnimate(){
//     console.log(this.menuState)
//     if(this.menuState === 'menu' || this.menuState === 'menu-active') {
//       this.menuState === 'menu' ? this.menuState = 'menu-active' : this.menuState = 'menu'
//     console.log('blyaa')

//   } else if(this.menuState === 'menu-static' || this.menuState === 'menu-active-static') {
//     this.menuState === 'menu-static' ? this.menuState = 'menu-active-static' : this.menuState = 'menu-static'
//     console.log('blyab')

//   } else {
//     console.log('blya')
//     return
//   }
//   }

//   constructor() {
// this.uiService.scrollPosition.subscribe((value) => {
//   this.scroll.set({viewport: value})
// })
// this.uiService.element.subscribe((value) => {
//   console.log('menu')
//     Object.assign(this.header, value['header'])
//     if(value['menu']['clickEvent'] === 'clicked') {
//       this.onAnimate()
//       console.log('ok')
//     }

// })
//   }
  
//   // animationStarted(event: any){
//   //   // this.onAnimate()
//   //   // console.log(event)
//   // }
//   // ot(){
//   //   console.log(this.menu(), this.scroll().viewport, this.header.height)
//   // }
 
// }

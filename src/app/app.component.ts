import { AfterViewInit, Component, effect, ElementRef, HostListener, inject, Input, signal, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { HeaderComponent } from "./header/header.component";
import { MenuComponent } from './menu/menu.component';
import { UiService } from './services/ui.service';
import { TimersService } from './services/timers.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, HeaderComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  clickEvent = new BehaviorSubject('not clicked')
  firestore: Firestore = inject(Firestore)
  items$: Observable<any[]>
  btnEvent = new BehaviorSubject<any>(false)
  private uiService = inject(UiService)
  private timersService = inject(TimersService)
  @HostListener('window:scroll', ['$event']) // чекнуть что это
onScroll(){ // ?
  // console.log(window.scrollY)
  this.uiService.changePosition(window.scrollY)
  // if(window.scrollY > )
}

  constructor(){
    const aCollection = collection(this.firestore, 'team-dashboard')
    this.items$ = collectionData(aCollection)
    this.items$.subscribe({
      next: value => console.log(value)
    })
      this.btnEvent.subscribe((value) => {
        this.uiService.elementAdd('menu', {button: value, clickEvent: false})
        console.log('btnEvent')
        // this.uiService.elementAdd('menu', undefined, ['clickEvent', 'not clicked'])
      })
      this.uiService.element.subscribe((value) => {
        console.log('app')
        this.uiService.paddingTextArea(value['menu']['clickEvent'])
this.clickEvent.next(value['menu']['clickEvent'])
console.log(this.clickEvent)
      })
      this.clickEvent.subscribe((value) => {
        console.log('clickEvent: ', value)
      })
  }
  eventConsume(event: string) {
    this.uiService.elementAdd('menu', undefined , ['clickEvent', event])
   
  const currentValue = this.btnEvent.getValue()
    this.timersService.timer(20000, !currentValue).then((result) => {
      this.btnEvent.next(result)
      // console.log(result)
    }) 
  }
}

import { AfterViewInit, Component, effect, ElementRef, HostListener, inject, input, Input, signal, ViewChild } from '@angular/core';
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
  firestore: Firestore = inject(Firestore)
  items$: Observable<any[]>
  btnEvent = new BehaviorSubject<any>(false)
  uiService = inject(UiService)
  // menuAppearance = new BehaviorSubject(null)
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
          this.uiService.elementAdd('menu', {button: value})
        })
        this.uiService.element.subscribe((value) => {
          this.uiService.paddingTextArea(value['menu']['button'])
          console.log('executed', value['menu']['button'])
          // this.menuAppearance.next(this.uiService.element.getValue()['menu']['button'])
      })
      // console.log(this.menuAppearance.getValue()!['menu']['button'])
      // console.log(this.uiService.element.getValue()['menu']['button'])
  }
  eventConsume(event: string) {
    this.uiService.eventHandler(event)
    console.log('event: ', this.uiService.events.getValue())
    this.uiService.elementAdd('menu', {button: true} )
  const currentValue = this.btnEvent.getValue()
  console.log(currentValue)
    this.timersService.timer(301, !currentValue).then((result) => {
      this.uiService.eventHandler(event, true)
    console.log('event: ', this.uiService.events.getValue())
      this.btnEvent.next(result)
    }) 
  }
}

import { AfterViewInit, Component, effect, ElementRef, HostListener, inject, Input, signal, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { HeaderComponent } from "./header/header.component";
import { MenuComponent } from './menu/menu.component';
import { UiService } from './services/ui.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, HeaderComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  firestore: Firestore = inject(Firestore)
  items$: Observable<any[]>
  btnEvent = signal<any>(false)
  private uiService = inject(UiService)
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
    effect(() => {
      this.uiService.elementAdd('menu', {button: this.btnEvent()})
    })
  }
  eventConsume(event: string) {
  this.btnEvent.set(!this.btnEvent())
  this.uiService.paddingTextArea(this.btnEvent())
  }
  
}

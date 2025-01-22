import { AfterViewInit, Component, computed, effect, inject, signal} from '@angular/core';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent{
  private uiService = inject(UiService)
  header = {height: 0, width: 0}
  scroll = signal({
    viewport: 0,
  })
  menu = computed(() => this.scroll().viewport > this.header.height? 'menu' : 'menu-static')
  
  constructor() {
this.uiService.scrollPosition.subscribe((value) => {
  this.scroll.set({viewport: value})
})
this.uiService.elementMeasurements.subscribe((value) => {
  console.log(value)
    Object.assign(this.header, value['header'])
})
  }
  
  // ot(){
  //   console.log(this.menu(), this.scroll().viewport, this.header.height)
  // }
 
}

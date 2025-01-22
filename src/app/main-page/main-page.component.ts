import { Component, computed, inject, signal} from '@angular/core';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  private uiService = inject(UiService)
  header = {height: 0, width: 0}
  scroll = signal({
      viewport: 0,
    })
    textArea = computed(() => this.scroll().viewport > this.header.height? 'text-area' : 'text-area-static')
  
  constructor() {
this.uiService.scrollPosition.subscribe((value) => {
  this.scroll.set({viewport: value})
})
this.uiService.elementMeasurements.subscribe((value) => {
    Object.assign(this.header, value['header'])
})
  }
  

}

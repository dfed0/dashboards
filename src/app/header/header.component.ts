// import { AfterViewInit, Component, effect, ElementRef, EventEmitter, inject, OnChanges, OnInit, output, Output, signal, SimpleChanges, ViewChild } from '@angular/core';
// import { UiService } from '../services/ui.service';

// @Component({
//   selector: 'app-header',
//   imports: [],
//   templateUrl: './header.component.html',
//   // animations: [
//   //   trigger('myAnimationTrigger', [
//   //     transition('big => small', animate('1s cubic-bezier(0.8,0.3,0,1)'))
//   //   ])
//   // ],
//   styleUrl: './header.component.css'
// })
// export class HeaderComponent implements OnInit, AfterViewInit{
//   @ViewChild("header") header!: ElementRef
//   private uiService = inject(UiService)// оптимизировать нужно
//   scroll = {
//     viewport: 0,
//     heightHeader: 0
//   } // как обновляется?
  
//   constructor(){ 
//     effect(() => { // работает как было но как
//     this.uiService.scrollPosition.subscribe((value) => {
//     this.scroll.viewport = value
//     console.log(this.scroll)
//     })
//  }) 
//   }
//   ngOnInit(): void {
    
//   }
//   ngAfterViewInit() {
//   this.scroll.heightHeader = this.header.nativeElement.offsetHeight
//   console.log(this.header.nativeElement.offsetWidth)
//   this.uiService.elementAdd('header',{height: this.header.nativeElement.offsetHeight, width: this.header.nativeElement.offsetWidth})
//   }
 
// myStatusExp = 'animate'
// onClick = output<string>()
// }


import { AfterViewInit, Component, computed, effect, ElementRef, EventEmitter, inject, OnChanges, OnInit, output, Output, signal, SimpleChanges, ViewChild } from '@angular/core';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  // animations: [
  //   trigger('myAnimationTrigger', [
  //     transition('big => small', animate('1s cubic-bezier(0.8,0.3,0,1)'))
  //   ])
  // ],
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit{
  @ViewChild("header") header!: ElementRef // почему обязательно переменная называется header?
  private uiService = inject(UiService)// оптимизировать нужно
  headerObject = {height: 0, width: 0}
    scroll = signal({
        viewport: 0,
    })
      headerBlock = computed(() => this.scroll().viewport > this.headerObject.height ? true : false)
    
  constructor(){ 
    this.uiService.scrollPosition.subscribe((value) => {
      this.scroll.set({viewport: value})
    })
    this.uiService.elementMeasurements.subscribe((value) => {
        Object.assign(this.header, value['header'])
    })
  }
  
  ngAfterViewInit() {
  this.headerObject.height = this.header.nativeElement.offsetHeight
  // this.header.width = this.headerComponent.nativeElement.offsetWidth
  this.uiService.elementAdd('header',{height: this.header.nativeElement.offsetHeight, width: this.header.nativeElement.offsetWidth})
  }
 
myStatusExp = 'animate'
onClick = output<string>()
}

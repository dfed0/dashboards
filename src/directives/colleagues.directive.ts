import { AfterContentInit, AfterViewInit, Directive, ElementRef, HostListener, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UiService } from '../app/services/ui.service';

@Directive({
  selector: '[appColleaguesPage]', 
})
export class ColleaguesDirective implements AfterViewInit{
  uiService = inject(UiService)
    screenHeight: number;
    screenWidth: number;
    number: number;
    constructor(private el: ElementRef) {
      
    }
    ngAfterViewInit() {
      this.uiService.element.subscribe(value => {
        this.number = Math.trunc(this.el.nativeElement.offsetWidth / (this.el.nativeElement.childNodes[0].offsetWidth * 6/5))
      console.log('DDDDDD', this.number, (this.el.nativeElement.childNodes[0].offsetWidth * 6/5))
  
       this.el.nativeElement.style.gridTemplateColumns = "repeat(" + this.number + ", 1fr)"

      })
      
    }
    
    @HostListener('window:resize', ['$event'])
    onResize(width: number) {
     


  
    this.number = Math.trunc(this.el.nativeElement.offsetWidth / (this.el.nativeElement.childNodes[0].offsetWidth * 6/5))
    console.log('DDDDDD', this.number)

    this.el.nativeElement.style.gridTemplateColumns = "repeat(" + this.number + ", 1fr)"
   

     
   }
   


  
}

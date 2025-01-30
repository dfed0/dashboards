import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDefaultButton]', 
})
export class DefaultButtonDirective {

  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.backgroundColor = '#DAD8D7'
    this.el.nativeElement.style.color = '#42424D'
    this.el.nativeElement.style.border = 'none'
    this.el.nativeElement.style.width = 'min-content'
    this.el.nativeElement.style.paddingLeft = '1rem'
    this.el.nativeElement.style.paddingRight = '1rem'
    this.el.nativeElement.style.paddingTop = '0.5rem'
    this.el.nativeElement.style.paddingBottom = '0.5rem'

    // this.el.nativeElement.style.overflow = 'hidden'
    this.el.nativeElement.style.whiteSpace = 'nowrap'

  


    
    this.el.nativeElement.style.borderRadius = '1rem'


  }
  @HostListener('mouseover') onMouseOver() {
    this.el.nativeElement.style.backgroundColor = '#302E2C'
    this.el.nativeElement.style.color = '#FCFAF8'
  }
  @HostListener('mouseout') onMouseOut() {
    this.el.nativeElement.style.backgroundColor = '#DAD8D7'
    this.el.nativeElement.style.color = '#42424D'
  }
}

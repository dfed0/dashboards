import { Directive, ElementRef, HostListener, inject, Input, input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDefaultButton]', 
})
export class DefaultButtonDirective implements OnInit{
  fontSize = input<string>();
  // @Input('first') first : any = "5";
  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.backgroundColor = '#DAD8D7'
    this.el.nativeElement.style.color = '#42424D'
    this.el.nativeElement.style.border = 'none'
    this.el.nativeElement.style.width = 'min-content'
    this.el.nativeElement.style.fontSize = '10rem'
    this.el.nativeElement.style.paddingLeft = '5rem'
    this.el.nativeElement.style.paddingRight = '5rem'
    this.el.nativeElement.style.borderRadius = '5rem'
    this.el.nativeElement.style.paddingTop = '0.5rem'
    this.el.nativeElement.style.paddingBottom = '0.5rem'
    this.el.nativeElement.style.whiteSpace = 'nowrap'


  }
ngOnInit() {
  console.log(this.fontSize())
  this.el.nativeElement.style.fontSize = this.fontSize() + 'rem'
    this.el.nativeElement.style.paddingLeft =  Number(this.fontSize()) * 0.5 + 'rem'
    this.el.nativeElement.style.paddingRight = Number(this.fontSize()) * 0.5 + 'rem'
    this.el.nativeElement.style.borderRadius = Number(this.fontSize()) * 0.5 + 'rem'
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

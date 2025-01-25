import { Component, input } from '@angular/core';
import { state, style, trigger } from '@angular/animations';

@Component({
  selector: 'app-menu-links',
  animations: [
    trigger('divState', [
      state('normal', style({
    'background-color': '#444'
    })), state('highlighted', style({
      'background': 'radial-gradient(circle, rgba(191,191,191,1) 30%, rgba(131,131,131,1) 80%, rgba(68,68,68,1) 100%)'
    }))
    ]
  ),
  trigger('pState', [
    state('normal', style({
      'color': '#888'
    })), state('highlighted', style({
      'color': '#333'
    }))
  ])
  ],
  imports: [],
  templateUrl: './menu-links.component.html',
  styleUrl: './menu-links.component.css'
})
export class MenuLinksComponent {
  state='normal'
mouseEnter(){
 this.state = 'highlighted'
}
mouseLeave(){ 
  this.state='normal'
}
}

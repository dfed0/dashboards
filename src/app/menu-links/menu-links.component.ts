import { Component, input, OnChanges, OnInit, output, SimpleChanges, ViewChild } from '@angular/core';
import { state, style, trigger } from '@angular/animations';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-links',
  animations: [
    trigger('linkState', [
      state('normal', style({
    })), state('highlighted', style({
      'background-color': '#fff',
      'border-top': 'solid #E8E8E6',
    'box-shadow': '0px 0.3rem 0.3rem #E8E8E6',
    'border-radius': '4rem 4rem 4rem 4rem'
    }))
    ]
  ),
  trigger('pState', [
    state('normal', style({
      'color': '#464647'
    })), state('highlighted', style({
      'color': '#333'
    }))
  ])
  ],
  imports: [RouterLink],
  templateUrl: './menu-links.component.html',
  styleUrl: './menu-links.component.css'
})
export class MenuLinksComponent implements OnInit, OnChanges{
  public link = input<string>()
  constructor() {
  }
 
    
  
  ngOnInit() {
    // console.log('menu-link!!!!!! ')
  }
  ngOnChanges(changes: SimpleChanges) {
    // console.log('LINK!!!!!!!',this.link(), 'CHANGES!!!!!', changes)
  } 
  ott(){
    console.log(this.link())
  }
  state='normal'

mouseEnter(){
  this.state = 'highlighted'
}
mouseLeave(){ 
  this.state='normal'
}
// onClick = output<string>()

}

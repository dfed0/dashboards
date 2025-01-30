import { Component, ElementRef, input, output, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
val = ''
iconClass = input<string>()
formClass = input<string>()
inputClass = input<string>()
inputValue = input<string>()
btnClass = input<string>()
onKeyup = output<any>()
// ot(){

//   console.log(this.val)
// }
// onKeydown = output<any>()


// selectEv(event: any){
// console.log(event)
// }

// onKeydown(event: any) {
//   this.keydown.emit(event)
// }
// ot(){
//   console.log('FHASBFHABJFBHABFBASB')
//   console.log(this.iconClass(), this.searchClass())
// }
}

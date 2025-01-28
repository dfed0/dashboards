import { Component, input } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
iconClass = input<string>()
formClass = input<string>()
inputClass = input<string>()
btnClass = input<string>()

// ot(){
//   console.log('FHASBFHABJFBHABFBASB')
//   console.log(this.iconClass(), this.searchClass())
// }
}

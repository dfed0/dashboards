import { AfterViewInit, Component, computed, effect, ElementRef, EventEmitter, inject, OnChanges, OnDestroy, OnInit, output, Output, signal, SimpleChanges, ViewChild } from '@angular/core';
import { UiService } from '../services/ui.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { RouterService } from '../services/router.service';
import { SearchComponent } from "../search/search.component";
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
// import { InputsService } from '../services/inputs.service';

@Component({
  selector: 'app-header',
  imports: [SearchComponent],
  templateUrl: './header.component.html',
  // animations: [
  //   trigger('myAnimationTrigger', [
  //     transition('big => small', animate('1s cubic-bezier(0.8,0.3,0,1)'))
  //   ])
  // ],
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, AfterViewInit{
  @ViewChild("header") header!: ElementRef // почему обязательно переменная называется header?
  searchInputValue = new BehaviorSubject('')
  // inputsService = inject(InputsService)
  keyupEvent(value: any) {
      this.searchInputValue.next(value.target.value)
  }
  private routerService = inject(RouterService)
  private uiService = inject(UiService)// оптимизировать нужно
  title = new BehaviorSubject('')
  headerObject = {height: 0, width: 0}
    scroll = new BehaviorSubject({
        viewport: 0,
    })
    headerBlock = new BehaviorSubject(this.scroll.getValue().viewport > this.headerObject.height ? true : false)
   
  constructor(){ 
    this.uiService.scrollPosition.subscribe((value) => {
      this.scroll.next({viewport: value})
      this.headerBlock.next(this.scroll.getValue().viewport > this.headerObject.height ? true : false)
    })
    this.uiService.element.subscribe((value) => {
        Object.assign(this.headerObject, value['header'])
        console.log('header subscribe')

    })
    this.routerService.currentPath.subscribe(value => {
      this.title.next(value)
    })
  
  }
 ngOnInit() {
   
 }
 logout = output()
  onLogout () {
this.logout.emit()
  }
 
  ngAfterViewInit() {
  this.headerObject.height = this.header.nativeElement.offsetHeight
  // this.header.width = this.headerComponent.nativeElement.offsetWidth
  this.uiService.elementAdd('header',{height: this.header.nativeElement.offsetHeight, width: this.header.nativeElement.offsetWidth})
  }
 
// myStatusExp = 'animate'
onClick = output<string>()
}

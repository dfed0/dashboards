import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class RouterService {
    currentPath = new BehaviorSubject('')
    pages = new BehaviorSubject([])
    takeCurrentPath(path: string){
    this.currentPath.next(path)
    console.log('takeCurrentPath')
    }
    takeAllPages(pages: any){
this.pages.next(pages)
console.log('takeAllPages')
    }
}
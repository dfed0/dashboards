import { Injectable } from "@angular/core";
import { BehaviorSubject, firstValueFrom, interval, lastValueFrom, Observable, take, timer } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TimersService {
    constructor() {

    }
    // разобраться как работает!!


    // currentTimer: BehaviorSubject<any> = new BehaviorSubject(null)
    timerAdd(miliseconds: number, value: any): Promise<any>{
        return new Promise((resolve) => {
         setTimeout(() => {    
             resolve(value);
         }, miliseconds)
    })
    }
}
        // if(this.currentTimer.getValue() !== null) {
        //     console.log(this.currentTimer.getValue())

        //     console.log('TIMER CLEARED')
        //     this.currentTimer.getValue().unsubscribe()
        // }
        // console.log("TIMER STARTED")

    //     const timerService = timer(miliseconds).subscribe(t => {
    //         this.currentTimer.next(value)
    //         console.log('TIMER ENDED')
    //     timerService.unsubscribe()
    //     console.log('ENDED?', timerService)
    // })
    
    // console.log(timerService)




// console.log(this.activeTimer.getValue())
    //   this.activeTimer.next(timer(miliseconds).subscribe(t => value))
    //    return new Promise((resolve) => {
    //     this.activeTimer.next(setTimeout(() => {    
    //         resolve(value);
    //         return null
    //     }, miliseconds))
    //    })


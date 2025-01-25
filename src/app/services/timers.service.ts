import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
})
export class TimersService {
    constructor() {

    }
    // разобраться как работает!!
    timer(miliseconds: number, value: any): Promise<any>{
       return new Promise((resolve) => {
        setTimeout(() => {    
            resolve(value)    
        }, miliseconds)
       })
    }
}
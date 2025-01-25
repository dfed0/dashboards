import { Injectable } from "@angular/core";
import { BehaviorSubject, ReplaySubject } from "rxjs";
@Injectable({
    providedIn: 'root'
})

export class UiService {
    constructor(){}
    scrollPosition = new BehaviorSubject(0)
    events: BehaviorSubject<Array<string>> = new BehaviorSubject([''])
    eventHandler(event: string, remove?: true){
        const currentEvents = this.events.getValue()
    if(remove === undefined){
       const updatedArray = [
        ...currentEvents,
       event
    ] 
    this.events.next(updatedArray)
    } else if(remove === true) {
        const tempArray = [
            ...currentEvents,
        ] 
        const updatedArray = tempArray.filter((e) => e !== event )
        this.events.next(updatedArray)
    } else {
        return
    }
    }
    element: BehaviorSubject<{[index: string]: {[index: string]: any}}>  = new BehaviorSubject({}) // поменять тип
    elementAdd(name: string, element: { [index: string]: any}) {
        const currentElement = this.element.getValue()
console.log(currentElement)
       
            if(!Object.keys(this.element.value).includes(name)){
                const updatedMeasurements = {
                ...currentElement,
                [name]: element
                } 
                this.element.next(updatedMeasurements)
            }  else if (Object.keys(this.element.value).includes(name) && this.element.value[name] === this.element){
                return
            } else if(Object.keys(this.element.value).includes(name)) {
                
                const updatedMeasurements = {
                ...currentElement,
            }

            Object.assign(updatedMeasurements[name], element)
            this.element.next(updatedMeasurements)
            } else {
                return
            }
            
        
    }
    changePosition(position: any) {
     this.scrollPosition.next(position)
     console.log(position)
    }
    paddingTextArea (activated: boolean) {
        if(activated === true){
            document.documentElement.style.setProperty('--left-menu', '1vw')
            document.documentElement.style.setProperty('--right-menu', '66vw')
        } else if (activated === false) {
            document.documentElement.style.setProperty('--left-menu', '0')
            document.documentElement.style.setProperty('--right-menu', '0')
        } else {
            return
        }
    }
}
import { Injectable } from "@angular/core";
import { BehaviorSubject, ReplaySubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class UiService {
    constructor(){}
    scrollPosition = new BehaviorSubject(0)

    elementMeasurements: BehaviorSubject<{[index: string]: {[index: string]: number}}>  = new BehaviorSubject({}) // поменять тип
    elementAdd(name: string, element: { [index: string]: number}) {
        const currentMeasurements = this.elementMeasurements.value

        const updatedMeasurements = {
            ...currentMeasurements,
            [name]: element
        }
        this.elementMeasurements.next(updatedMeasurements)
        // let elementMeasurementsTemp: {[index: string]: {element: number, height: number}}
        // this.elementMeasurements.next(Object.assign({[name]: element}))
        // console.log(elementMeasurementsTemp)
        // elementMeasurementsTemp[name] = Object.assign(element)
        // console.log(this.elementMeasurements)
        // [index: string]: object
        // this.elementMeasurements.next(elementMeasurementsTemp)
    }
    changePosition(position: any) {
     this.scrollPosition.next(position)
     console.log(position)
    //  console.log(this.scrollPosition)
    }
    paddingTextArea (activated: boolean) {
        if(activated){
            document.documentElement.style.setProperty('--left-menu', '1vw')
            document.documentElement.style.setProperty('--right-menu', '66vw')
        } else if (!activated) {
            document.documentElement.style.setProperty('--left-menu', '0')
            document.documentElement.style.setProperty('--right-menu', '0')
        } else {
            return
        }
    }
}
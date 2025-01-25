import { Injectable } from "@angular/core";
import { BehaviorSubject, ReplaySubject } from "rxjs";
@Injectable({
    providedIn: 'root'
})

export class UiService {
    constructor(){}
    scrollPosition = new BehaviorSubject(0)

    element: BehaviorSubject<{[index: string]: {[index: string]: any}}>  = new BehaviorSubject({}) // поменять тип
    elementAdd(name: string, element?: { [index: string]: any}, modify?: [keyName: string, value: number | string | boolean]) {
        const currentElement = this.element.getValue()
console.log(currentElement)
        if(modify !== undefined) {
            const measurements = {...currentElement}
            console.log(measurements)
            const nestedMeasurements = Object.assign(measurements[name], {
                [modify[0]]: modify[1],
              });
            //   measurements[name][modify[0]] = modify[1]
            //   console.log(measurements[name])
            // const nestedMeasurements = {...measurements[name]}
           
            Object.assign(measurements, {[name]: {...nestedMeasurements}})

            console.log(measurements)

            
            this.element.next(measurements)
            console.log('modify')
        }
        if(element !== undefined){
            if(!Object.keys(this.element.value).includes(name)){
                const updatedMeasurements = {
                ...currentElement,
                [name]: element
                } 
                this.element.next(updatedMeasurements)
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
    paddingTextArea (activated: string | null) {
        if(activated === 'clicked'){
            document.documentElement.style.setProperty('--left-menu', '1vw')
            document.documentElement.style.setProperty('--right-menu', '66vw')
        } else if (activated === 'not clicked') {
            document.documentElement.style.setProperty('--left-menu', '0')
            document.documentElement.style.setProperty('--right-menu', '0')
        } else {
            return
        }
    }
}
// import { Injectable } from "@angular/core";
// import { BehaviorSubject } from "rxjs";

// @Injectable({
//     providedIn: 'root'
// })

// export class InputsService {
//     inputs: BehaviorSubject<{[index: string]: string}>  = new BehaviorSubject({}) // поменять тип
//         inputAdd(name: string, keyEvent: any) {
//             const currentElement = this.inputs.getValue()
//       const key: string = this.removeUnnecessaryKeys(keyEvent)
//                 if(!Object.keys(this.inputs.getValue()).includes(name)){
//                     const updatedMeasurements = {
//                     ...currentElement,
//                     [name]: key
//                     } 
//                     this.inputs.next(updatedMeasurements)
//                 console.log('INITIAL',this.inputs.getValue())

//                 }  
//                 // else if (Object.keys(this.inputs.getValue()).includes(name) && this.inputs.getValue()[name] === this.inputs){
//                 //     return
//                 // }
//                 else if(keyEvent.key === 'Backspace') {
//                     const updatedMeasurements = {
//                         ...currentElement,
//                     }
//                     // console.log()
//                     updatedMeasurements[name] = updatedMeasurements[name].slice(0, -1)
//                     console.log('MEASU', updatedMeasurements)
//                 this.inputs.next(updatedMeasurements)

//                 }
//                  else if(Object.keys(this.inputs.getValue()).includes(name)) {
                    
//                     const updatedMeasurements = {
//                     ...currentElement,
//                 }
    
//                 // Object.assign(updatedMeasurements[name], key)
//                 updatedMeasurements[name] = updatedMeasurements[name] + key
//                 console.log(updatedMeasurements[name], key)
//                 this.inputs.next(updatedMeasurements)
//                 console.log('UPDATED',this.inputs.getValue())
//                 } else {
//                 console.log('ELSE')

//                     return
//                 }
                
//             // console.log()
//         }
//         removeUnnecessaryKeys(keyEvent: any): string{
// if(keyEvent.altKey || keyEvent.ctrlKey || keyEvent.metaKey || keyEvent.shiftKey || keyEvent.key === 'Backspace' || keyEvent.key === 'Enter' || keyEvent.key === 'Tab' || keyEvent.key === 'Escape' || keyEvent.key === 'CapsLock' || keyEvent.key === 'ArrowUp' || keyEvent.key === 'ArrowDown' || keyEvent.key === 'ArrowLeft' || keyEvent.key === 'ArrowRight'){
//     console.log('REMOVE')
//     return ''
// } 
//  else {
//     console.log('ADD', keyEvent.key)

// return keyEvent.key
// }

// }
// }
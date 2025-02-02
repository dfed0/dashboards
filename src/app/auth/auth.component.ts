import { Component, NgModule } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";
// import { NgForm, NgModel } from "@angular/forms";
@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    imports: [FormsModule]
})
export class AuthComponent {
    isSignupMode = true
isLoading = false
    constructor(private authService: AuthService){}
    onSubmit(authForm: NgForm) {
      
        if(!authForm.valid) {
            return
        }
         const email = authForm.value.email
       const password = authForm.value.password
       this.isLoading = false
       if(!this.isSignupMode){
       
       } else {
 this.authService.signup(email, password).subscribe(resData => {
        console.log(resData)
       },
       error => {
        console.log(error)
       })
       }
       
authForm.reset()
    }
    onSwitchMode (){
        this.isSignupMode = !this.isSignupMode
    }
}
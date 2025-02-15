import { Component, NgModule } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { AuthResponceData, AuthService } from "./auth.service";
import { LoadingSpinnerComponent } from "../shared/loading-spinner/loading-spinner.component";
import { NgIf } from "@angular/common";
import { Observable } from "rxjs";
import { RouterService } from "../services/router.service";
import { Router } from "@angular/router";
// import { NgForm, NgModel } from "@angular/forms";
@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    imports: [FormsModule, LoadingSpinnerComponent, NgIf]
})
export class AuthComponent {
    isSignupMode = true
isLoading = false
// error: string = null прочитать что не так
error: string | null = null
    onSwitchMode (){
        this.isSignupMode = !this.isSignupMode
    }
    constructor(private authService: AuthService, private router: Router){}
    onSubmit(authForm: NgForm) {
      
        if(!authForm.valid) {
            return
        }
         const email = authForm.value.email
       const password = authForm.value.password

       let authObs: Observable<AuthResponceData>
       this.isLoading = true
       if(!this.isSignupMode){
       authObs = this.authService.login(email, password)
       } else {
       authObs =  this.authService.signup(email, password)
       }
       authObs.subscribe(
        {next: resData => {
            console.log(resData)
    this.isLoading = false
    this.router.navigate(['/home'])
           },
         error:  errorMessage => {
           console.log(errorMessage)
            this.error = errorMessage
    this.isLoading = false
    
           }})
       
authForm.reset()
    }
    

}
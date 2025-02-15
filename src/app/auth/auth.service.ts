import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Subject, tap } from "rxjs";
import { throwError } from "rxjs";
import { User } from "./user.model";
import { Router } from "@angular/router";
export interface AuthResponceData {
    kind?: string,
    idToken: string, 
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?: boolean
}
@Injectable({
    providedIn: 'root'
})

export class AuthService {
    user = new Subject<User | null>()
    constructor(private http: HttpClient, private router: Router) {

    }
    signup(email: string, password: string) {
return this.http.post<AuthResponceData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAel9Yr9_uUJL7pGA8pxjKiJVkEEIv4mgA',
    {email, password, returnSecureToken: true}
).pipe(catchError(this.handleError), tap(resData => {
    this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
 }))
}
login(email: string, password: string){
    return this.http.post<AuthResponceData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAel9Yr9_uUJL7pGA8pxjKiJVkEEIv4mgA', 
        {email, password, returnSecureToken: true}
    ).pipe(catchError(this.handleError), tap(resData => {
       this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
    }))
}
private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000)
    const user = new User(email, userId, token, expirationDate)
    this.user.next(user)
}
logout () {
    this.user.next(null)
    this.router.navigate(['/auth'])
}
private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'Something went wrong. Please try again.'
    console.log(errorRes)

    if(!errorRes.error || !errorRes.error.error){

        console.log(errorRes)
        return throwError(() => errorMessage)
    }
    switch(errorRes.error.error.message){
        case 'EMAIL_EXISTS': 
        errorMessage = 'This email exists already.'
        break;
        // case 'EMAIL_NOT_FOUND': 
        // errorMessage = 'This email does not exists.'
        // break;
        case 'INVALID_LOGIN_CREDENTIALS':
        errorMessage = 'Invalid email or password. Try again.'
break;
    }
    return throwError(() => errorMessage)
}
}
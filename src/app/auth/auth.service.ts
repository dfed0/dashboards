import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface AuthResponceData {
    kind: string,
    idToken: string, 
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string
}
@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor(private http: HttpClient) {

    }
    signup(email: string, password: string) {
return this.http.post<AuthResponceData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAel9Yr9_uUJL7pGA8pxjKiJVkEEIv4mgA',
    {email, password, returnSecureToken: true}
)
    
}
}
import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { IAuthResponse } from '../interfaces/response.interfaces';
import { Plugins } from "@capacitor/core";
import { catchError } from 'rxjs/operators';

export const TOKEN_KEY = 'auth-token';
const { Storage } = Plugins;

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public _authState$:BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(
        // private plt: Platform,
        private http: HttpClient,
        private router: Router
    ){
        // this.plt.ready().then(() => {
        //     this.checkToken();
        // });
        // console.log('[DEV][AUTH]', this)
    }

    public checkToken() {
        Storage.get({ key: TOKEN_KEY }).then(res => {
            if( res ){
                this._authState$.next(true);
            }
        })
    }

    public signup( login: string, password: string ){
        this.http.put('/asgard-api/auth', { login: login, password: password }).subscribe(( resp: IAuthResponse )=>{
            console.log('[DEV][AUTH][SIGNUP]', resp)
            // this.router.navigate(['profile']);
            // localStorage.setItem('auth_token', resp.token);
        })
    }

    public login( login: string, password: string ){

        this.http.post('/asgard-api/auth', { login: login, password: password }).subscribe(
            ( resp: IAuthResponse )=>{
                console.log('[DEV][AUTH][LOGIN]', resp)
                // localStorage.setItem('auth_token', resp.token);
                return Storage.set({ key: TOKEN_KEY, value: resp.token}).then(() => {
                    this._authState$.next( resp.auth );
                    this.router.navigate(['/']);
                }),
            ( error )=>{
                console.log('error', error)
                return error
            }
        })
    }

    public logout(){

        this.http.delete('/asgard-api/auth').subscribe(( resp: IAuthResponse )=>{
            console.log('[DEV][AUTH][LOGOUT]', resp)
            // localStorage.setItem('auth_token', resp.token);
            return Storage.remove({ key: TOKEN_KEY }).then(() => {
                this._authState$.next(false);
                this.router.navigate(['/']);
            });
        })
    }

    public isAuthenticated(){
        return this._authState$.value;
    }
}

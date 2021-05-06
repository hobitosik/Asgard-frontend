import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IAuthResponse } from '../interfaces/response.interfaces';
import { Plugins } from "@capacitor/core";
import { catchError, map } from 'rxjs/operators';

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
        private router: Router,
        private toast: ToastController,
    ){
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
        return this.http.put('/asgard-api/auth', { login: login, password: password }).pipe(
            map(( response: IAuthResponse )=>{
                console.log('[DEV][AUTH][SIGNUP]', response)
                if( response.signup )
                    return Storage.set({ key: TOKEN_KEY, value: response.token}).then(() => {
                        this._authState$.next( response.signup );
                        this.router.navigate(['/']);
                    })
                else return null
            }),
            catchError( error =>{
                console.warn('[DEV][AUTH][LOGIN] error', error)
                return from(this.toast
                    .create({
                        // header: 'Ошибка регистрации',
                        message: 'Даный логин уже существует',
                        duration: 10000,
                        color: 'danger',
                        position: 'middle',
                        buttons: [{
                            text: 'Ясно',
                            role: 'cancel',
                            handler: () => this.toast.dismiss()
                        }]
                    })
                    .then( t =>{ t.present() })
                    .then(()=>{ throw error; })
                );
            })
        )
    }

    public login( login: string, password: string ): Observable<any>{
        
        return this.http.post('/asgard-api/auth', { login: login, password: password }).pipe(
            map(( response: IAuthResponse )=>{
                console.log('[DEV][AUTH][LOGIN]', response)
                if( response.auth )
                    return Storage.set({ key: TOKEN_KEY, value: response.token}).then(() => {
                        this._authState$.next( response.auth );
                        this.router.navigate(['/']);
                    })
                else return null
            }),
            catchError( error =>{
                console.warn('[DEV][AUTH][LOGIN] error', error)
                return from(this.toast
                    .create({
                        header: 'Ошибка авторизации',
                        message: 'Вы указали неверный логин или пароль',
                        duration: 10000,
                        color: 'danger',
                        position: 'middle',
                        buttons: [{
                            text: 'Ясно',
                            role: 'cancel',
                            handler: () => this.toast.dismiss()
                        }]
                    })
                    .then( t =>{ t.present() })
                    .then(()=>{ throw error; })
                );
            })
        )
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

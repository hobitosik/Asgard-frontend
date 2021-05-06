import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
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

    constructor(
        private http: HttpClient,
        private router: Router,
        private toast: ToastController,
    ){
        // console.log('[DEV][AUTH]', this)
    }

    private checkToken$(): Observable<boolean> {
        return from( Storage.get({ key: TOKEN_KEY }) ).pipe(
            map( token =>{
                console.log('[DEV][AUTH] checkToken', token)
                return token && token.value ? true : false
            }
        ))
    }

    public signup( login: string, password: string ){
        return this.http.put('/asgard-api/auth', { login: login, password: password }).pipe(
            map(( response: IAuthResponse )=>{
                console.log('[DEV][AUTH][SIGNUP]', response)
                if( response.signup )
                    return Storage.set({ key: TOKEN_KEY, value: response.token}).then(()=>{
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

    public logout(): Observable<any>{
        return this.http.delete('/asgard-api/auth').pipe(
            map(( response: IAuthResponse )=>{
                console.log('[DEV][AUTH][LOGOUT]', response);
                return Storage.remove({ key: TOKEN_KEY }).then(()=>{
                    this.router.navigate(['/']);
                });
            }),
            catchError( error =>{
                console.warn('[DEV][AUTH][LOGOUT] error', error)
                return from(this.toast
                    .create({
                        header: 'Ошибка выхода из приложения',
                        // message: 'Вы указали неверный логин или пароль',
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

    public isAuthenticated$(){
        return this.checkToken$()
    }
}

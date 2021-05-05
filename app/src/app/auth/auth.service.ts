import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { BehaviorSubject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

const TOKEN_KEY = 'auth-token';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    token;

    public _authState$:BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(
        private storage: NativeStorage,
        private plt: Platform,
        private http: HttpClient,
        private router: Router
    ){
        // this.plt.ready().then(() => {
        //     this.checkToken();
        // });
    }

    public checkToken() {
        this.storage.getItem(TOKEN_KEY).then(res => {
            if( res ){
                this._authState$.next(true);
            }
        })
    }

    public signup( login: string, password: string ){
        this.http.put(`${environment.apiUri}/auth`, { login: login, password: password }).subscribe(( resp: any )=>{
            console.log('[DEV][AUTH][LOGIN]', resp)
            // this.router.navigate(['profile']);
            // localStorage.setItem('auth_token', resp.token);
        })
    }

    public login( login: string, password: string ){

        this.http.post(`${environment.apiUri}/auth`, { login: login, password: password }).subscribe(( resp: any )=>{
            console.log('[DEV][AUTH][LOGIN]', resp)
            // this.router.navigate(['profile']);
            // localStorage.setItem('auth_token', resp.token);

            return this.storage.setItem(TOKEN_KEY, resp.token).then(() => {
                this._authState$.next(true);
            });
        })
    }

    public logout(){
        return this.storage.remove(TOKEN_KEY).then(() => {
            this._authState$.next(false);
        });
    }

    public isAuthenticated(){
        return this._authState$.value;
    }
}

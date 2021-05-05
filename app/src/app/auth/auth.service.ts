import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { BehaviorSubject, of } from 'rxjs';

const TOKEN_KEY = 'auth-token';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    token;

    public _authState$:BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(
        private storage: NativeStorage,
        private plt: Platform
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

    public login(){
        return this.storage.setItem(TOKEN_KEY, 'Bearer 1234567').then(() => {
            this._authState$.next(true);
        });
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

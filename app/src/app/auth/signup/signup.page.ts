import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.page.html',
    styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
    public isIdenticPass = true;

    constructor(
        private authSrv: AuthService
    ){ }

    ngOnInit() {
    }

    signup( form: NgForm ){
        console.log('[DEV][SIGNUP][FORM] value: ', form.value );
        if( form.value.password !== form.value.passwordRepeat ){
            this.isIdenticPass = false;
            return null
        }else this.isIdenticPass = true;
        this.authSrv.signup( form.value.login, form.value.password ).subscribe()
    }

    passCompare( form: NgForm, event ){
        // console.log('event', event.target.value )
        this.isIdenticPass = form.value.password !== event.target.value ? false : true;
    }

}

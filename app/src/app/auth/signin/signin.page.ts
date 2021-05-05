import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.page.html',
    styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

    constructor(
        private authSrv: AuthService
    ){ }

    ngOnInit() {
    }

    login( form: NgForm ){
        // console.log('login: ->', this.loginForm.login, 'pass: ->', this.loginForm.password)
        console.log('login Form', form )
        this.authSrv.login( form.value.login, form.value.password )
    }

}

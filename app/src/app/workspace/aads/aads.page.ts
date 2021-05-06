import { Component, OnInit } from '@angular/core';
import { FormService } from '../forms/form.service';

@Component({
    selector: 'app-aads',
    templateUrl: './aads.page.html',
    styleUrls: ['./aads.page.scss'],
})
export class AadsPage implements OnInit {

    constructor(
        private formSrv: FormService
    ){}

    ngOnInit() {
    }

    public addEnt(){
        this.formSrv.openForm( 'aad' )
    }
}

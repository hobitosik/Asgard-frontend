import { Component, OnInit } from '@angular/core';
import { FormService } from '../forms/form.service';

@Component({
    selector: 'app-licenses',
    templateUrl: './licenses.page.html',
    styleUrls: ['./licenses.page.scss'],
})
export class LicensesPage implements OnInit {

    constructor(
        private formSrv: FormService
    ){}

    ngOnInit() {
    }

    public addEnt(){
        this.formSrv.openForm( 'license' )
    }

}

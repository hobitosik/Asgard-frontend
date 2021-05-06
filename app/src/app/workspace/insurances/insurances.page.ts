import { Component, OnInit } from '@angular/core';
import { FormService } from '../forms/form.service';

@Component({
    selector: 'app-insurances',
    templateUrl: './insurances.page.html',
    styleUrls: ['./insurances.page.scss'],
})
export class InsurancesPage implements OnInit {

    constructor(
        private formSrv: FormService
    ){}

    ngOnInit() {
    }

    public addEnt(){
        this.formSrv.openForm( 'insurance' )
    }
}

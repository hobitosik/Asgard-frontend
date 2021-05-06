import { Component, OnInit } from '@angular/core';
import { FormService } from '../forms/form.service';

@Component({
    selector: 'app-entrances',
    templateUrl: './entrances.page.html',
    styleUrls: ['./entrances.page.scss'],
})
export class EntrancesPage implements OnInit {

    constructor(
        private formSrv: FormService
    ){}

    ngOnInit() {
    }

    public addEnt(){
        this.formSrv.openForm( 'entrance' )
    }

}

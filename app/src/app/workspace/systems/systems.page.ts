import { Component, OnInit } from '@angular/core';
import { FormService } from '../forms/form.service';

@Component({
    selector: 'app-systems',
    templateUrl: './systems.page.html',
    styleUrls: ['./systems.page.scss'],
})
export class SystemsPage implements OnInit {

    constructor(
        private formSrv: FormService
    ){}

    ngOnInit() {
    }

    public addEnt(){
        this.formSrv.openForm( 'system' )
    }
}

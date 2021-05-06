import { Component, OnInit } from '@angular/core';
import { FormService } from '../forms/form.service';

@Component({
    selector: 'app-canopies',
    templateUrl: './canopies.page.html',
    styleUrls: ['./canopies.page.scss'],
})
export class CanopiesPage implements OnInit {

    constructor(
        private formSrv: FormService
    ){}

    ngOnInit() {
    }

    public addEnt(){
        this.formSrv.openForm( 'canopy' )
    }

}

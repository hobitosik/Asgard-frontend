import { Component, OnInit } from '@angular/core';
import { FormService } from '../forms/form.service';

@Component({
    selector: 'app-jumps',
    templateUrl: './jumps.page.html',
    styleUrls: ['./jumps.page.scss'],
})
export class JumpsPage implements OnInit {

    constructor(
        private formSrv: FormService
    ){}

    ngOnInit() {
    }

    public addEnt(){
        this.formSrv.openForm( 'jump' )
    }
}

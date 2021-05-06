import { Component, OnInit } from '@angular/core';
import { FormService } from '../forms/form.service';

@Component({
    selector: 'app-harnesses',
    templateUrl: './harnesses.page.html',
    styleUrls: ['./harnesses.page.scss'],
})
export class HarnessesPage implements OnInit {

    constructor(
        private formSrv: FormService
    ){}

    ngOnInit() {
    }

    public addEnt(){
        this.formSrv.openForm( 'harness' )
    }
}

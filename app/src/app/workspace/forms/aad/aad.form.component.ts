import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-aad-form',
    templateUrl: './aad.form.component.html',
    styleUrls: ['./aad.form.component.scss'],
})
export class AadFormComponent implements OnInit {
    @Input() entId:string = '';

    constructor() { }

    ngOnInit() {}

}

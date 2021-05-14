import { Component, Input, OnInit } from '@angular/core';
import { IEntity, IField } from 'src/app/interfaces/entities.interfaces';

@Component({
    selector: 'app-insurance.form',
    templateUrl: './insurance.form.component.html',
    styleUrls: ['./insurance.form.component.scss'],
})
export class InsuranceFormComponent implements OnInit {
    @Input() entity: IEntity;
    public fields: IField[];

    constructor(

    ){ }

    ngOnInit(){
        // console.log('[DEV][INSURANCE][INIT]', this)
        this.fields = this.entity.meta.fields;
    }

}

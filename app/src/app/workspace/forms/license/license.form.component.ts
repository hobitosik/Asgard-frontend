import { Component, Input, OnInit } from '@angular/core';
import { IEntity, IField } from 'src/app/interfaces/entities.interfaces';

@Component({
    selector: 'app-license.form',
    templateUrl: './license.form.component.html',
    styleUrls: ['./license.form.component.scss'],
})
export class LicenseFormComponent implements OnInit {
    @Input() entity: IEntity;
    public fields: IField[];

    constructor(

    ){ }

    ngOnInit(){
        // console.log('[DEV][LICENSE][INIT]', this)
        this.fields = this.entity.meta.fields;
    }

}

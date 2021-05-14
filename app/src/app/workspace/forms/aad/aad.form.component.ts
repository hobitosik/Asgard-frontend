import { Component, Input, OnInit } from '@angular/core';
import { IEntity, IField } from 'src/app/interfaces/entities.interfaces';

@Component({
    selector: 'app-aad-form',
    templateUrl: './aad.form.component.html',
    styleUrls: ['./aad.form.component.scss'],
})
export class AadFormComponent implements OnInit {
    @Input() entity: IEntity;
    public fields: IField[];

    constructor(

    ){ }

    ngOnInit(){
        // console.log('[DEV][ADD][INIT]', this)
        this.fields = this.entity.meta.fields;
    }

}

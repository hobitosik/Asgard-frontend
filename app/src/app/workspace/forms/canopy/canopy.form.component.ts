import { Component, Input, OnInit } from '@angular/core';
import { IEntity, IField } from 'src/app/interfaces/entities.interfaces';

@Component({
    selector: 'app-canopy.form',
    templateUrl: './canopy.form.component.html',
    styleUrls: ['./canopy.form.component.scss'],
})
export class CanopyFormComponent implements OnInit {
    @Input() entity: IEntity;
    public fields: IField[];

    constructor(

    ){ }

    ngOnInit(){
        // console.log('[DEV][CANOPY][INIT]', this)
        this.fields = this.entity.meta.fields;
    }
}

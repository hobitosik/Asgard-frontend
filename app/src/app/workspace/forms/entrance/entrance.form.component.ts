import { Component, Input, OnInit } from '@angular/core';
import { IEntity, IField } from 'src/app/interfaces/entities.interfaces';

@Component({
    selector: 'app-entrance.form',
    templateUrl: './entrance.form.component.html',
    styleUrls: ['./entrance.form.component.scss'],
})
export class EntranceFormComponent implements OnInit {
    @Input() entity: IEntity;
    public fields: IField[];

    constructor(

    ){ }

    ngOnInit(){
        // console.log('[DEV][ENTRANCE][INIT]', this)
        this.fields = this.entity.meta.fields;
    }

}

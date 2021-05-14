import { Component, Input, OnInit } from '@angular/core';
import { IEntity, IField } from 'src/app/interfaces/entities.interfaces';

@Component({
    selector: 'app-systems.form',
    templateUrl: './systems.form.component.html',
    styleUrls: ['./systems.form.component.scss'],
})
export class SystemsFormComponent implements OnInit {
    @Input() entity: IEntity;
    public fields: IField[];

    constructor(

    ){ }

    ngOnInit(){
        // console.log('[DEV][SYSTEM][INIT]', this)
        this.fields = this.entity.meta.fields;
    }

}

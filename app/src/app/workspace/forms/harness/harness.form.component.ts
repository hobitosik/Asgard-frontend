import { Component, Input, OnInit } from '@angular/core';
import { IEntity, IField } from 'src/app/interfaces/entities.interfaces';

@Component({
    selector: 'app-harness.form',
    templateUrl: './harness.form.component.html',
    styleUrls: ['./harness.form.component.scss'],
})
export class HarnessFormComponent implements OnInit {
    @Input() entity: IEntity;
    public fields: IField[];

    constructor(

    ){ }

    ngOnInit(){
        // console.log('[DEV][HARNESS][INIT]', this)
        this.fields = this.entity.meta.fields;
    }

}

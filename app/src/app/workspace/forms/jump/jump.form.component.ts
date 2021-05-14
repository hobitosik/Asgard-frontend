import { Component, Input, OnInit } from '@angular/core';
import { IEntity, IField } from 'src/app/interfaces/entities.interfaces';

@Component({
    selector: 'app-jump.form',
    templateUrl: './jump.form.component.html',
    styleUrls: ['./jump.form.component.scss'],
})
export class JumpFormComponent implements OnInit {
    @Input() entity: IEntity;
    public fields: IField[];

    constructor(

    ){ }

    ngOnInit(){
        // console.log('[DEV][JUMP][INIT]', this)
        this.fields = this.entity.meta.fields;
    }

}

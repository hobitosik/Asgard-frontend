import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ModalController } from "@ionic/angular";
import { IEntity } from "src/app/interfaces/entities.interfaces";
import { SrvService } from "src/app/srv.service";

@Component({
    selector: 'app-form-modal',
    templateUrl: './form.modal.html',
    styleUrls: ['./form.modal.scss'],
})
export class FormModal implements OnInit {
    @Input() entKey: string = '';
    @Input() entity: IEntity;

    form: FormGroup

    constructor(
        private modal: ModalController,
        private srv: SrvService
    ){}

    ngOnInit(){
        // let data = this.entId ? { id: this.entId } : null
        // this.srv.postOne$( this.entKey, data ).subscribe(( res )=>{
        //     console.log('[DEV][FORM][INIT]', res)
        // })
    }

    public close(){
        this.modal.dismiss()
    }

    public save(){
        console.log('[DEV][FORM][SAVE]')
    }
}

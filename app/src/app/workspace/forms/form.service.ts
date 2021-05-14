import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SrvService } from 'src/app/srv.service';
import { FormModal } from './form.modal';

@Injectable({
    providedIn: 'root'
})
export class FormService {

    constructor(
        private modal: ModalController,
        private srv: SrvService
    ){ }

    public async openForm( entKey:string, entId?:string ){
        entId
            ? await this.srv.fetchOne$( entKey, entId ).subscribe( resp =>{
                this.modal.create({
                    component: FormModal,
                    backdropDismiss: false,
                    keyboardClose: false,
                    componentProps: {
                        entKey,
                        entity: resp,
                    },
                })
                .then( modal => modal.present());
            })
            : await this.srv.fetchMeta$( entKey ).subscribe( resp =>{
                this.modal.create({
                    component: FormModal,
                    backdropDismiss: false,
                    keyboardClose: false,
                    componentProps: {
                        entKey,
                        entity: {
                            data: [],
                            meta: resp.meta ? resp.meta : { total: 0, fields: []}
                        },
                    },
                })
                .then( modal => modal.present());
            })   
    }

    saveForm(){

    }
}

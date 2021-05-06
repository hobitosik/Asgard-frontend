import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormModal } from './form.modal';

@Injectable({
    providedIn: 'root'
})
export class FormService {

    constructor(
        private modal: ModalController
    ){ }

    public async openForm( entKey:string, entId?:string ){
        const modal = await this.modal.create({
            component: FormModal,
            backdropDismiss: false,
            keyboardClose: false,
            componentProps: {
                entKey,
                entId
            },
        });
        await modal.present();
    }
}

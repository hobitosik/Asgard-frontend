import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkspaceRoutingModule } from './workspace-routing.module';

import { Workspace } from './workspace';
import { TermsModule } from '../terms/terms.module';
import { AppFormsModule } from './forms/app.forms.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        WorkspaceRoutingModule,
        TermsModule.forChild(),
        AppFormsModule.forRoot(),
    ],
    declarations: [Workspace]
})
export class WorkspaceModule {}

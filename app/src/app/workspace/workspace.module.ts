import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkspaceRoutingModule } from './workspace-routing.module';

import { Workspace } from './workspace';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        WorkspaceRoutingModule
    ],
    declarations: [Workspace]
})
export class WorkspaceModule {}

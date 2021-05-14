import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormService } from './form.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormModal } from './form.modal';
import { AadFormComponent } from './aad/aad.form.component';
import { CommonModule } from '@angular/common';
import { TermsModule } from 'src/app/terms/terms.module';



@NgModule({
    declarations: [
        FormModal,
        AadFormComponent,
    ],
    // entryComponents: [FormModal],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        TermsModule.forChild(),
    ]
})
export class AppFormsModule {
    static forRoot(): ModuleWithProviders<AppFormsModule> {
        return{
            ngModule: FormsModule,
            providers: [FormService]
        };
    }

    static forChild(): ModuleWithProviders<AppFormsModule> {
        return{ ngModule: FormService };
    }
}

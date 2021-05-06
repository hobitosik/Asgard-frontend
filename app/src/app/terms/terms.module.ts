import { NgModule, ModuleWithProviders } from '@angular/core';
import { TermPipe } from './term.pipe';
import { TermService } from './term.service';

@NgModule({
    declarations:[ TermPipe ],
    exports:[ TermPipe ]
})
export class TermsModule {

    static forRoot(): ModuleWithProviders<TermsModule> {
        return{
            ngModule: TermsModule,
            providers: [TermService]
        };
    }

    static forChild(): ModuleWithProviders<TermsModule> {
        return{ ngModule: TermsModule };
    }
}

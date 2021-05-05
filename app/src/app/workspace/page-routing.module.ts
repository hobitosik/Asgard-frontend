import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

import { Page } from './page';

const routes: Routes = [
    {
        path: '',
        component: Page,
        canActivate: [ AuthGuard ],
        canActivateChild: [AuthGuard],
        children: [{
            path: ':id',
            loadChildren: () => import('./page.module').then( m => m.PageModule)
        },{
            path: '',
            redirectTo: '/workspace/summary',
            pathMatch: 'full'
        }]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})
export class PageRoutingModule {}

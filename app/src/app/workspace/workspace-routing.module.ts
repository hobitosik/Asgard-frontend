import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

import { Workspace } from './workspace';

const routes: Routes = [
    {
        path: '',
        component: Workspace,
        canActivate: [ AuthGuard ],
        canActivateChild: [AuthGuard],
        children: [{
            path: 'summary',
            loadChildren: () => import('./summary/summary.module').then( m => m.SummaryPageModule)
        },{
            path: 'jumps',
            loadChildren: () => import('./jumps/jumps.module').then( m => m.JumpsPageModule)
        },{
            path: 'systems',
            loadChildren: () => import('./systems/systems.module').then( m => m.SystemsPageModule)
        },{
            path: 'entrances',
            loadChildren: () => import('./entrances/entrances.module').then( m => m.EntrancesPageModule)
        },{
            path: 'insurances',
            loadChildren: () => import('./insurances/insurances.module').then( m => m.InsurancesPageModule)
        },{
            path: 'licenses',
            loadChildren: () => import('./licenses/licenses.module').then( m => m.LicensesPageModule)
        },{
            path: 'calculator',
            loadChildren: () => import('./calculator/calculator.module').then( m => m.CalculatorPageModule)
        },{
            path: 'settings',
            loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
        },{
            path: 'canopies',
            loadChildren: () => import('./canopies/canopies.module').then( m => m.CanopiesPageModule)
        },{
            path: 'harnesses',
            loadChildren: () => import('./harnesses/harnesses.module').then( m => m.HarnessesPageModule)
        },{
            path: 'aads',
            loadChildren: () => import('./aads/aads.module').then( m => m.AadsPageModule)
        },{
            path: '',
            redirectTo: '/workspace/summary',
            pathMatch: 'full'
        }]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})
export class WorkspaceRoutingModule {}

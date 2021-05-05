import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPage } from './auth.page';

const routes: Routes = [
    {
        path: '',
        component: AuthPage,
        children: [{
            path: 'signin',
            loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
        },{
            path: 'signup',
            loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
        },{
            path: '',
            redirectTo: '/auth/signin',
            pathMatch: 'full'
        }]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthPageRoutingModule {}

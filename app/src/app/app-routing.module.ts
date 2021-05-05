import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'workspace',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        // canActivate: [ AuthGuard ],
        loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
    },
    {
        path: 'workspace',
        canLoad: [ AuthGuard ],
        loadChildren: () => import('./workspace/page.module').then( m => m.PageModule)
    },
    {
        path: '**',
        pathMatch: 'full',
        loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundPageModule)
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}

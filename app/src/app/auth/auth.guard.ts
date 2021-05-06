import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        public authService: AuthService,
        private nav: NavController,
    ){}

    canLoad( route: Route, segments: UrlSegment[] ): Observable<boolean> | Promise<boolean> | boolean{
        return this.canActivate();
    }

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.isAuthenticated$().pipe(
            tap( state =>{
                if( !state ) this.nav.navigateRoot('/auth');
            })
        );
    }
    canActivateChild(
        // next: ActivatedRouteSnapshot,
        // state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate()
    }
}

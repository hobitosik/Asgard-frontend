import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
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
        if( !this.authService.isAuthenticated() )
            this.nav.navigateRoot('/auth');
        return this.authService.isAuthenticated();
    }
    canActivateChild(
        // next: ActivatedRouteSnapshot,
        // state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate()
    }
}

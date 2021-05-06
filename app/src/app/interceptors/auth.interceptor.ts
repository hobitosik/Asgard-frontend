import {Injectable} from '@angular/core';
import {
    HttpInterceptor, HttpRequest, HttpHandler,
    HttpResponse, HttpErrorResponse, HttpEvent
} from '@angular/common/http';
import { from, Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { TOKEN_KEY } from '../auth/auth.service';
import { Plugins } from "@capacitor/core";

const { Storage } = Plugins;

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(){}

    intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
        
        return from( Storage.get({ key: TOKEN_KEY }) ).pipe(
            map( token =>{                
                return req.clone({
                    headers: req.headers.append('Token', token?.value || '' )
                });
            }),
            switchMap( authReq =>{
                return next.handle( authReq ).pipe(
                    tap( event =>{
                        if( event instanceof HttpResponse ) 
                            console.log('Server response');
                    }, err =>{
                        if( err instanceof HttpErrorResponse )
                            console.warn( '[INTERCEPTOR] Error: ', err );
                    })
                );
            })
        )        
    }
}

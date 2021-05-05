import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
    ],
    providers: [
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        NativeStorage,
        AuthGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}

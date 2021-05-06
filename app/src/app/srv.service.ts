import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { from, Observable, of } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SrvService {

    constructor(
        private http: HttpClient,
        private loading: LoadingController,
        private toast: ToastController,
    ){
        console.log('[SRV][INIT]', this);
    }

    /*
        получение списка сущности 
        get/entkey
        получение сущности
        get/entkey:id
        измение / создание сущности
        post/entkey
        удаление сущности
        delete/entkey

        получение словаря
        get/dict/dictKey
    */
    
    postOne$<T=any>( entKey, data ): Observable<T> {
        return this.commonEntRequest$<T>('post', {
            entKey,
            data
        });
    }

    saveOne$<T=any>( entKey, data, entId? ): Observable<T> {
        return this.commonEntRequest$<T>('post', { // patch
            entKey,
            data,
            entId
        });
    }

    fetchOne$<T=any>( entKey, entId ): Observable<T> {
        return this.commonEntRequest$<T>('get', {
            entKey,
            entId,
        });
    }

    deleteOne$<T=any>( entKey, entId ): Observable<T> {
        return this.commonEntRequest$<T>('delete', {
            entKey,
            entId,
        });
    }

    fetchAll$<T=any>( entKey ): Observable<T> {
        return this.commonEntRequest$<T>('get', {
            entKey,
        });
    }

    fetchDict$<T=any>( dictKey ): Observable<T> {
        return this.commonEntRequest$<T>('get', {
            dictKey
        })
    }

    private commonEntRequest$<T=any>( method:'post' | 'get' | 'delete' | 'put' | 'patch', o:{
        entKey?: string,
        entId?: string,
        dictKey?: string,
        data?: any,
        message?: string,
        caption?: string,
        captionErr?: string,
        captionSuccess?: string | ((ent)=>string),
    }): Observable<any> {
        let url = o.dictKey
            ? `/asgard-api/dict/${o.dictKey}/`
            : o.entId
                ? `/asgard-api/${o.entKey}/${o.entId}`
                : `/asgard-api/${o.entKey}/`;

        let entityKey = o.dictKey
                            ? o.dictKey
                            : o.entKey
                                ? o.entKey : '';

        return of( entityKey ).pipe(
            mergeMap(()=>{
                switch( method ){
                    case 'get': return this.http.get( url );
                    case 'put': return this.http.put( url, { data: o.data });
                    case 'post': return this.http.post( url, { data: o.data });
                    case 'patch': return this.http.patch( url, { data: o.data } );
                    case 'delete': return this.http.delete( url );
                    default:
                        console.warn(`Неизвестный метод запроса к серверу: ${method}`);
                        return of(null);
                }
            }),
            mergeMap( response =>{
                console.log('[SRV][RESPONSE]:', response, '[OPTIONS]:', o);
                if( response ) return response
                else return null
            }),
            catchError( error =>{
                console.warn('[SRV][ERROR]', error)
                return from( this.toast
                    .create({
                        header: 'Ошибка при обращении к серверу',
                        // message: '',
                        duration: 10000,
                        color: 'danger',
                        position: 'middle',
                        buttons: [{
                            text: 'Ясно',
                            role: 'cancel',
                            handler: () => this.toast.dismiss()
                        }]
                    })
                    .then( t =>{ t.present() })
                    .then(()=>{ throw error })
                )
            })
        )
    }
}

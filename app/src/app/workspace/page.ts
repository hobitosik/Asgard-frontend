import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-folder',
    templateUrl: './page.html',
    styleUrls: ['./page.scss'],
})
export class Page implements OnInit {
    public page: string;
    public appPages = [
        { title: 'Сводка', url: '/page/summary', icon: 'stats-chart' },
        { title: 'Журнал прыжков', url: '/page/jumps', icon: 'accessibility' },
        { title: 'Системы', url: '/page/systems', icon: 'cube' },
        { title: 'Допуски', url: '/page/entrances', icon: 'ticket' },
        { title: 'Страховки', url: '/page/insurances', icon: 'leaf' },
        { title: 'Лицензии', url: '/page/license', icon: 'ribbon' },
        { title: 'Калькулятор загрузки', url: '/page/calculator', icon: 'calculator' },
        { title: 'Настройки', url: '/page/settings', icon: 'settings' },
    ];

    constructor(
        private activatedRoute: ActivatedRoute,
        private authSrv: AuthService
    ){ }

    ngOnInit(){
        // console.log('[INIT][PAGE]', this.activatedRoute)
        this.page = this.activatedRoute.snapshot.paramMap.get('id');
    }

    logout(){
        this.authSrv.logout();
    }

}

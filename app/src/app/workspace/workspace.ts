import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-workspace',
    templateUrl: './workspace.html',
    styleUrls: ['./workspace.scss'],
})
export class Workspace implements OnInit {
    public page: string;
    public appPages = [
        { title: 'Сводка', url: '/workspace/summary', icon: 'stats-chart' },
        { title: 'Журнал прыжков', url: '/workspace/jumps', icon: 'accessibility' },
        { title: 'Парашюты', url: '/workspace/canopies', icon: 'umbrella' },
        { title: 'Ранцы', url: '/workspace/harnesses', icon: 'tablet-portrait' },
        { title: 'Приборы', url: '/workspace/aad', icon: 'shield' },
        { title: 'Системы', url: '/workspace/systems', icon: 'cube' },
        { title: 'Допуски', url: '/workspace/entrances', icon: 'ticket' },
        { title: 'Страховки', url: '/workspace/insurances', icon: 'leaf' },
        { title: 'Лицензии', url: '/workspace/licenses', icon: 'ribbon' },
        { title: 'Калькулятор загрузки', url: '/workspace/calculator', icon: 'calculator' },
        { title: 'Настройки', url: '/workspace/settings', icon: 'settings' },
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

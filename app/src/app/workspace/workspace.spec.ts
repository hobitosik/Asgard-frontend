import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { Workspace } from './workspace';

describe('Workspace', () => {
    let component: Workspace;
    let fixture: ComponentFixture<Workspace>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ Workspace ],
            imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
        }).compileComponents();

        fixture = TestBed.createComponent(Workspace);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

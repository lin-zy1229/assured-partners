import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DontAlienateYourSourceSubitemComponent } from './dont-alienate-your-source-subitem.component';

describe('DontAlienateYourSourceSubitemComponent', () => {
    let component: DontAlienateYourSourceSubitemComponent;
    let fixture: ComponentFixture<DontAlienateYourSourceSubitemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DontAlienateYourSourceSubitemComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DontAlienateYourSourceSubitemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

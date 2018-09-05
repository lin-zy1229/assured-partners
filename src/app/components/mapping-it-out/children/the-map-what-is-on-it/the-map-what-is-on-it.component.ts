import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
    selector: 'app-the-map-what-is-on-it',
    templateUrl: './the-map-what-is-on-it.component.html',
    styleUrls: ['./the-map-what-is-on-it.component.css',
        '../../../../common/common_styles.css'],
    animations: [
        trigger(
            'enterAnimation', [
                transition(':enter', [
                    style({ transform: 'translateX(100%)', opacity: 0 }),
                    animate('300ms', style({ transform: 'translateX(0)', opacity: 1 }))
                ]),
                transition(':leave', [
                    style({ transform: 'translateX(0)', opacity: 1 }),
                    animate('300ms', style({ transform: 'translateX(100%)', opacity: 0 }))
                ])
            ]
        )
    ],
})
export class TheMapWhatIsOnItComponent implements OnInit {

    stage: number = 0;
    page: number = 0;

    constructor(public router: Router) { }
    ngOnInit() {
    }

    onClickShape(_page, _stage) {

        this.stage = _stage;
    }

}

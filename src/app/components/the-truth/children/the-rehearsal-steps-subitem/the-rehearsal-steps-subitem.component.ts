import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-the-rehearsal-steps-subitem',
    templateUrl: './the-rehearsal-steps-subitem.component.html',
    styleUrls: ['./the-rehearsal-steps-subitem.component.scss'
        , '../../../../common/common_styles.css']
})
export class TheRehearsalStepsSubitemComponent implements OnInit {

    constructor(public router:Router) { }
    ngOnInit() {
    }

}

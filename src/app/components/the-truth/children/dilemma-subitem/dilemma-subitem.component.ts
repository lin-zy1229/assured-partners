import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dilemma-subitem',
    templateUrl: './dilemma-subitem.component.html',
    styleUrls: ['./dilemma-subitem.component.scss',
        '../../../../common/common_styles.css']
})
export class DilemmaSubitemComponent implements OnInit {

    constructor(public router:Router) {
    }
    ngOnInit() {
    }

}

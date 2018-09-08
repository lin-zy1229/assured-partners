import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-the-crystal-ball-subitem',
    templateUrl: './the-crystal-ball-subitem.component.html',
    styleUrls: ['./the-crystal-ball-subitem.component.scss',
        '../../../../common/common_styles.css']
})
export class TheCrystalBallSubitemComponent implements OnInit {

    constructor(public router:Router) { }
    ngOnInit() {
    }

}

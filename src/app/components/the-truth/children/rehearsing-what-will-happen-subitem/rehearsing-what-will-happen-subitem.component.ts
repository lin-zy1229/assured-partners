import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-rehearsing-what-will-happen-subitem',
    templateUrl: './rehearsing-what-will-happen-subitem.component.html',
    styleUrls: ['./rehearsing-what-will-happen-subitem.component.scss'
        , '../../../../common/common_styles.css']
})
export class RehearsingWhatWillHappenSubitemComponent implements OnInit {

    constructor(public router:Router) { }
    ngOnInit() {
    }

}

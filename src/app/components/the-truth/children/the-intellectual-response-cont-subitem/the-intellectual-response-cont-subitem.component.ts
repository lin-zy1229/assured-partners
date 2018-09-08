import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-the-intellectual-response-cont-subitem',
    templateUrl: './the-intellectual-response-cont-subitem.component.html',
    styleUrls: ['./the-intellectual-response-cont-subitem.component.scss'
        , '../../../../common/common_styles.css']
})
export class TheIntellectualResponseContSubitemComponent implements OnInit {

    constructor(public router:Router) { }

    ngOnInit() {
    }

}

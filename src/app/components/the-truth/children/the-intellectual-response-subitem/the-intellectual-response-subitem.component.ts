import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-the-intellectual-response-subitem',
    templateUrl: './the-intellectual-response-subitem.component.html',
    styleUrls: ['./the-intellectual-response-subitem.component.scss'
        , '../../../../common/common_styles.css']
})
export class TheIntellectualResponseSubitemComponent implements OnInit {

    constructor(public router:Router) { }

    ngOnInit() {
    }

}

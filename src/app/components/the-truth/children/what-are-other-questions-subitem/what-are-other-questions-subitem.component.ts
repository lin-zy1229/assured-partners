import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-what-are-other-questions-subitem',
    templateUrl: './what-are-other-questions-subitem.component.html',
    styleUrls: ['./what-are-other-questions-subitem.component.scss'
        , '../../../../common/common_styles.css']
})
export class WhatAreOtherQuestionsSubitemComponent implements OnInit {

    constructor(public router:Router) { }
    ngOnInit() {
    }

}

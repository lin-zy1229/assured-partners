import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-lets-try-one-of-your-own-subitem',
    templateUrl: './lets-try-one-of-your-own-subitem.component.html',
    styleUrls: ['./lets-try-one-of-your-own-subitem.component.scss'
        ,'../../../../common/common_styles.css']
})
export class LetsTryOneOfYourOwnSubitemComponent implements OnInit {

    constructor(public router:Router) { }

    ngOnInit() {
    }

}

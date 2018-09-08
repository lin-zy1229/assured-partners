import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-more-scripting-subitem',
    templateUrl: './more-scripting-subitem.component.html',
    styleUrls: ['./more-scripting-subitem.component.scss'
        , '../../../../common/common_styles.css']
})
export class MoreScriptingSubitemComponent implements OnInit {

    constructor(public router:Router) {}

    ngOnInit() {
    }

}

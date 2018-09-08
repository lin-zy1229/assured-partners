import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-setting-the-stage-subitem',
    templateUrl: './setting-the-stage-subitem.component.html',
    styleUrls: ['./setting-the-stage-subitem.component.scss',
        '../../../../common/common_styles.css']
})
export class SettingTheStageSubitemComponent implements OnInit {

    constructor(public router:Router) { }
    ngOnInit() {
    }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-setting-the-stage-cont-subitem',
    templateUrl: './setting-the-stage-cont-subitem.component.html',
    styleUrls: ['./setting-the-stage-cont-subitem.component.scss',
        '../../../../common/common_styles.css']
})
export class SettingTheStageContSubitemComponent implements OnInit {

    constructor(public router:Router) { }

    ngOnInit() {
    }

}

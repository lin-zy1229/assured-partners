import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-wrapping-up-subitem',
    templateUrl: './wrapping-up-subitem.component.html',
    styleUrls: ['./wrapping-up-subitem.component.scss'
        , '../../../../common/common_styles.css']
})
export class WrappingUpSubitemComponent implements OnInit {

    constructor(public router:Router) { }
    ngOnInit() {
    }

}

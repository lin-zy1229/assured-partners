import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-defining-proactive-service-subitem',
    templateUrl: './defining-proactive-service-subitem.component.html',
    styleUrls: ['./defining-proactive-service-subitem.component.scss'
        , '../../../../common/common_styles.css']
})
export class DefiningProactiveServiceSubitemComponent implements OnInit {

    constructor(public router:Router) {
    }

    ngOnInit() {
    }

}

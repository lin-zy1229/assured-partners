import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-three-important-items-subitem',
    templateUrl: './three-important-items-subitem.component.html',
    styleUrls: ['./three-important-items-subitem.component.scss'
        , '../../../../common/common_styles.css']
})
export class ThreeImportantItemsSubitemComponent implements OnInit {

    constructor(public router:Router) { }
    ngOnInit() {
    }

}

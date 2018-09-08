import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-really-subitem',
    templateUrl: './really-subitem.component.html',
    styleUrls: ['./really-subitem.component.scss',
        '../../../../common/common_styles.css']
})
export class ReallySubitemComponent implements OnInit {

    constructor(public router:Router) { }
    ngOnInit() {
    }

}

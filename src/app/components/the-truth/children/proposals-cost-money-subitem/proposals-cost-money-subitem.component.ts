import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-proposals-cost-money-subitem',
    templateUrl: './proposals-cost-money-subitem.component.html',
    styleUrls: ['./proposals-cost-money-subitem.component.scss',
        '../../../../common/common_styles.css']
})
export class ProposalsCostMoneySubitemComponent implements OnInit {

    constructor(public router:Router) {
    }

    ngOnInit() {
    }

}

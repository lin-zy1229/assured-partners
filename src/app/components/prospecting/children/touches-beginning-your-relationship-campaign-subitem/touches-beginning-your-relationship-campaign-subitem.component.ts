import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material';
import { Router } from '@angular/router';

@Component({
    selector: 'app-touches-beginning-your-relationship-campaign-subitem',
    templateUrl: './touches-beginning-your-relationship-campaign-subitem.component.html',
    styleUrls: ['./touches-beginning-your-relationship-campaign-subitem.component.scss'
        , '../../../../common/common_styles.css']
})
export class TouchesBeginningYourRelationshipCampaignSubitemComponent implements OnInit {

    stage: number = 0;
    page: number = 0;
    appMainitemName: string = "app-prospecting";
    appSubitemName: string = "app-touches-beginning-your-relationship-campaign-subitem";
    sectionCount: number = 2;

    constructor(public router:Router) {
    }

    ngOnInit() {
        this.moveStepper(this.sectionCount);
    }
    ngAfterViewInit() {
        let selectorQuery = `${this.appSubitemName} .mat-horizontal-stepper-header`;
        let getLastElemIndex = document.querySelectorAll(selectorQuery).length - 1;
        let element = <HTMLElement>document.querySelectorAll(selectorQuery)[getLastElemIndex];
        element.style.display = "none";
    }

    @ViewChild('stepper') stepper: MatStepper;

    onClickPage(_page) {
        this.page = _page;
        this.moveStepper(_page - 1);
    }

    onClickShape(_stage) {
        this.stage = _stage;
    }
    selectionChange(event) {
        this.page = event.selectedIndex + 1;
    }
    moveStepper(index) {
        this.stepper.selectedIndex = index;

        let selectorQuery = `${this.appMainitemName} ${this.appSubitemName} mat-horizontal-stepper div.mat-horizontal-stepper-header-container`;
        let getLastElemIndex = 0;
        let element = <HTMLElement>document.querySelectorAll(selectorQuery)[getLastElemIndex];

        if (index == this.sectionCount) {
            element.style.display = "none";
        } else {
            element.style.display = "flex";
        }
    }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material';

@Component({
    selector: 'app-prospecting-process-to-follow-subitem',
    templateUrl: './prospecting-process-to-follow-subitem.component.html',
    styleUrls: ['./prospecting-process-to-follow-subitem.component.scss'
        , '../../../../common/common_styles.css']
})
export class ProspectingProcessToFollowSubitemComponent implements OnInit {

    stage: number = 0;
    page: number = 0;
    appMainitemName: string = "app-prospecting";
    appSubitemName: string = "app-prospecting-process-to-follow-subitem";
    sectionCount: number = 2;

    constructor() {

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

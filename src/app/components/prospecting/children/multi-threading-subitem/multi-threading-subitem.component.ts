import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material';
import { Router } from '@angular/router';

@Component({
    selector: 'app-multi-threading-subitem',
    templateUrl: './multi-threading-subitem.component.html',
    styleUrls: ['./multi-threading-subitem.component.scss'
        , '../../../../common/common_styles.css']
})
export class MultiThreadingSubitemComponent implements OnInit {

    stage: number = 0;
    appMainitemName: string = "app-prospecting";
    appSubitemName: string = "app-multi-threading-subitem";
    sectionCount: number = 3;
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
    onClickShape(_stage) {
        this.stage = _stage;
        this.moveStepper(_stage - 1);
    }
    selectionChange(event) {
        this.stage = event.selectedIndex + 1;
    }
    moveStepper(index) {
        this.stepper.selectedIndex = index;

        let selectorQuery = `${this.appMainitemName} ${this.appSubitemName} mat-horizontal-stepper div.mat-horizontal-stepper-header-container`;
        let getLastElemIndex = 0;
        let element = <HTMLElement>document.querySelectorAll(selectorQuery)[getLastElemIndex];

        element.style.display = "none";
        // if (index == this.sectionCount) {
        //     element.style.display = "none";
        // } else {
        //     element.style.display = "flex";
        // }
    }

}

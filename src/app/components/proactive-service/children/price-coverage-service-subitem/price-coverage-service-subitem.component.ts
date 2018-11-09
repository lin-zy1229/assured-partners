import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material';
import { Router } from '@angular/router';

@Component({
    selector: 'app-price-coverage-service-subitem',
    templateUrl: './price-coverage-service-subitem.component.html',
    styleUrls: ['./price-coverage-service-subitem.component.scss'
        , '../../../../common/common_styles.css']
})
export class PriceCoverageServiceSubitemComponent implements OnInit {

    stage: number = 0;
    appMainitemName: string = "app-proactive-service";
    appSubitemName: string = "app-price-coverage-service-subitem";

    constructor(public router:Router) {
    }

    ngOnInit() {
        this.moveStepper(0);
    }

    ngAfterViewInit() {
        // let selectorQuery = `${this.appSubitemName} .mat-horizontal-stepper-header`;
        // let getLastElemIndex = document.querySelectorAll(selectorQuery).length - 1;
        // let element = <HTMLElement>document.querySelectorAll(selectorQuery)[getLastElemIndex];
        // element.style.display = "none";
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
        this.stage = index + 1;

        this.stepper.selectedIndex = index;

        let selectorQuery = `${this.appMainitemName} ${this.appSubitemName} mat-horizontal-stepper div.mat-horizontal-stepper-header-container`;
        let element = <HTMLElement>document.querySelectorAll(selectorQuery)[0];

        element.style.display = "none";
        // if (index == 2) {
        //     element.style.display = "none";
        // } else {
        //     element.style.display = "flex";
        // }
    }

}

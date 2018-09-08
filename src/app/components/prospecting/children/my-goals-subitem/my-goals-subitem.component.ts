import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material';

@Component({
    selector: 'app-my-goals-subitem',
    templateUrl: './my-goals-subitem.component.html',
    styleUrls: ['./my-goals-subitem.component.scss'
        , '../../../../common/common_styles.css']
})
export class MyGoalsSubitemComponent implements OnInit {

    stage: number = 0;

    appMainitemName: string = "app-prospecting";
    appSubitemName: string = "app-my-goals-subitem";

    constructor() {

    }

    ngOnInit() {
        this.moveStepper(2);
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

        if (index == 2) {
            element.style.display = "none";
        } else {
            element.style.display = "flex";
        }
    }

}

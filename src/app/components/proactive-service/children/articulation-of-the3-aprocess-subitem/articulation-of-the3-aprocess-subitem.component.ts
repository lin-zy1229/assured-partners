import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material';
import { Router } from '@angular/router';

@Component({
    selector: 'app-articulation-of-the3-aprocess-subitem',
    templateUrl: './articulation-of-the3-aprocess-subitem.component.html',
    styleUrls: ['./articulation-of-the3-aprocess-subitem.component.scss',
        '../../../../common/common_styles.css']
})
export class ArticulationOfThe3AProcessSubitemComponent implements OnInit {

    stage: number = 0;
    appMainitemName: string = "app-proactive-service";
    appSubitemName: string = "app-articulation-of-the3-aprocess-subitem";

    constructor(public router:Router) {

    }

    ngOnInit() {
        this.moveStepper(1);
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
        // if (index == 1) {
        //     element.style.display = "none";
        // } else {
        //     element.style.display = "flex";
        // }
    }

}

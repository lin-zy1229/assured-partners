import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material';

@Component({
    selector: 'app-write-it-out-subitem',
    templateUrl: './write-it-out-subitem.component.html',
    styleUrls: ['./write-it-out-subitem.component.scss'
        , '../../../../common/common_styles.css']
})
export class WriteItOutSubitemComponent implements OnInit {

    stage: number = 0;

    constructor() {

    }

    ngOnInit() {
        this.moveStepper(0);
    }
    appSubitemName: string = "app-write-it-out-subitem";
    ngAfterViewInit() {
        // let selectorQuery = `${this.appSubitemName} .mat-horizontal-stepper-header`;
        // let getLastElemIndex = document.querySelectorAll(selectorQuery).length - 1;
        // let element = <HTMLElement>document.querySelectorAll(selectorQuery)[getLastElemIndex];
        // element.style.display = "none";
    }

    @ViewChild('stepper1') stepper1: MatStepper;
    @ViewChild('stepper2') stepper2: MatStepper;

    onClickShape(_stage) {
        this.stage = _stage;
        this.moveStepper(_stage - 1);
    }
    selectionChange(event) {
        this.stage = event.selectedIndex + 1;
    }
    moveStepper(index) {
        this.stage = index + 1;

        this.stepper1.selectedIndex = index;
        this.stepper2.selectedIndex = index;

        let selectorQuery = `app-leverage-relation ${this.appSubitemName} mat-horizontal-stepper div.mat-horizontal-stepper-header-container`;
        let element = <HTMLElement>document.querySelectorAll(selectorQuery)[0];

        // if (index == 2) {
        //     element.style.display = "none";
        // } else {
        //     element.style.display = "flex";
        // }
        // element.style.display = "none";
    }

}

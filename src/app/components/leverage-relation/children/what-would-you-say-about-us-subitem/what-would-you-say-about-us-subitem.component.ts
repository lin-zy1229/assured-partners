import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material';
import { Router } from '@angular/router';

@Component({
    selector: 'app-what-would-you-say-about-us-subitem',
    templateUrl: './what-would-you-say-about-us-subitem.component.html',
    styleUrls: ['./what-would-you-say-about-us-subitem.component.scss'
        , '../../../../common/common_styles.css']
})
export class WhatWouldYouSayAboutUsSubitemComponent implements OnInit {

    stage: number = 0;

	constructor(public router:Router) {
    }

    ngOnInit() {
        this.moveStepper(2);
    }
    appSubitemName: string = "app-what-would-you-say-about-us-subitem";
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
        this.stepper.selectedIndex = index;

        let selectorQuery = `app-leverage-relation ${this.appSubitemName} mat-horizontal-stepper div.mat-horizontal-stepper-header-container`;
        let element = <HTMLElement>document.querySelectorAll(selectorQuery)[0];

        // if (index == 2) {
        //     element.style.display = "none";
        // } else {
        //     element.style.display = "flex";
        // }
        element.style.display = "none";
    }
}

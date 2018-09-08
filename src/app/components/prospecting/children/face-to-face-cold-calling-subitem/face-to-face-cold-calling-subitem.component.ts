import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-to-face-cold-calling-subitem',
  templateUrl: './face-to-face-cold-calling-subitem.component.html',
  styleUrls: ['./face-to-face-cold-calling-subitem.component.scss'
  , '../../../../common/common_styles.css']
})
export class FaceToFaceColdCallingSubitemComponent implements OnInit {

    page: number = 0;
    stage: number = 0;

    appMainitemName: string = "app-prospecting";
    appSubitemName: string = "app-face-to-face-cold-calling-subitem";

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
        this.page = index + 1;

        this.stepper.selectedIndex = index;

        let selectorQuery = `${this.appMainitemName} ${this.appSubitemName} mat-horizontal-stepper div.mat-horizontal-stepper-header-container`;
        let element = <HTMLElement>document.querySelectorAll(selectorQuery)[0];


        // if (index == 2) {
        //     element.style.display = "none";
        // } else {
        //     element.style.display = "flex";
        // }
        element.style.display = "none";
    }

}

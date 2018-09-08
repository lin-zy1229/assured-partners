import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material';
import { Router } from '@angular/router';

@Component({
    selector: 'app-the-articulation-blueprint-style-subitem',
    templateUrl: './the-articulation-blueprint-style-subitem.component.html',
    styleUrls: ['./the-articulation-blueprint-style-subitem.component.scss'
        , '../../../../common/common_styles.css']
})
export class TheArticulationBlueprintStyleSubitemComponent implements OnInit {

    stage: number = 0;
    page: number = 0;
    appMainitemName: string = "app-proactive-service";
    appSubitemName: string = "app-the-articulation-blueprint-style-subitem";

    constructor(public router:Router) {
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

        if (index == 2) {
            element.style.display = "none";
        } else {
            element.style.display = "flex";
        }
    }
}

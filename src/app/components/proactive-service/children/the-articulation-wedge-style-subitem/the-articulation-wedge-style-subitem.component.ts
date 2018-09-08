import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatStepper } from '@angular/material';
import { Router } from '@angular/router';

@Component({
    selector: 'app-the-articulation-wedge-style-subitem',
    templateUrl: './the-articulation-wedge-style-subitem.component.html',
    styleUrls: ['./the-articulation-wedge-style-subitem.component.scss',
        '../../../../common/common_styles.css'],
    encapsulation: ViewEncapsulation.None,
})

export class TheArticulationWedgeStyleSubitemComponent implements OnInit {

    stage: number = 0;
    appMainitemName: string = "app-proactive-service";
    appSubitemName: string = "app-the-articulation-wedge-style-subitem";
    dataSource: ArticulationData[];

    constructor(public router: Router) {
        this.dataSource = [
            {
                image: "proactive-service/15-when.png", title: "When",
                content: "When – Your agent (it is fine to use the agent’s name if desired)"
            },
            {
                image: "proactive-service/15-cameout.png", title: "Came out",
                content: "Came out – State the specific time frame <span class='emphasis'>“The first week of July”</span> for example"
            },
            {
                image: "proactive-service/15-todo.png", title: "To Do A(n)",
                content: "To Do A(n) – State the proactive service <span class='emphasis'>“Equipment Review”</span>"
            },
            {
                image: "proactive-service/15-andtheygotout.png", title: "And They Got Out",
                content: "And They Got Out – Not <span class='emphasis'>“Did They”</span> we proceed with the assumption that the incumbent did what we are talking about, this way we are not accusing the incumbent of being incompetent"
            },
            {
                image: "proactive-service/15-soyouwouldnt.png", title: "So You Wouldn’t Have to Worry About . . .",
                content: "our negative statement should illustrate the catastrophic scenario <span class='emphasis'>“Wasting tens of thousands of dollars on premiums you shouldn’t have had to pay”</span>"
            },
        ];
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

export interface ArticulationData {
    image: string;
    title: string;
    content: string;
}

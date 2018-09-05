import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatStepper } from '@angular/material';

@Component({
	selector: 'app-center-of-influence-worksheet-subitem',
	templateUrl: './center-of-influence-worksheet-subitem.component.html',
	styleUrls: ['./center-of-influence-worksheet-subitem.component.scss',
		'../../../../common/common_styles.css']
})
export class CenterOfInfluenceWorksheetSubitemComponent implements OnInit, AfterViewInit {

	stage: number = 0;

	dataSource = data;
	columnNames: string[] = ['Center Of Influence', 'People To Meet', 'Company', 'Revenue', 'Total Rev/C of Influence'];
	totalRevenue: number = 0;
	appSubitemName: string = "app-center-of-influence-worksheet-subitem";
	constructor() {
		//
		// calculate total values
		//
		this.dataSource.forEach(element => {
			element.total = 0;
			element.peoplesInfos.forEach(people => {
				element.total += people.revenue;
			});
			this.totalRevenue += element.total;
		});
	}

	ngOnInit() {
		this.moveStepper(3);
	}
	ngAfterViewInit() {
        let selectorQuery = `${this.appSubitemName} .mat-horizontal-stepper-header`;
		let getLastElemIndex = document.querySelectorAll(selectorQuery).length - 1;
		let element = <HTMLElement>document.querySelectorAll(selectorQuery)[getLastElemIndex];
		element.style.display="none";
	}
	@ViewChild('stepper') stepper: MatStepper;
	selectionChange(event) {
        this.stage = event.selectedIndex + 1;
    }
	onClickShape(_stage) {
		this.stage = _stage;
		this.moveStepper(_stage - 1);

		// _stepper.next();

	}
	moveStepper(index) {
		this.stepper.selectedIndex = index;
		let selectorQuery = `app-leverage-relation ${this.appSubitemName} mat-horizontal-stepper div.mat-horizontal-stepper-header-container`;
        let getLastElemIndex = 0;
        let element = <HTMLElement>document.querySelectorAll(selectorQuery)[getLastElemIndex];

        if (index == 3) {
            element.style.display = "none";
        } else {
            element.style.display = "flex";
        }
	}

}

export interface CenterOfInfluence {
	centerOfInfluence: string;
	peoplesInfos: PeopleInfo[];
	total: number;
}
export interface PeopleInfo {
	peopleToMeet: string;
	company: string;
	revenue: number;
}
const data: CenterOfInfluence[] = [
	{
		centerOfInfluence: "Mark Tyler",
		peoplesInfos: [
			{ peopleToMeet: "John Smith", company: "ABC Manufacturing", revenue: 10000 },
			{ peopleToMeet: "Kelly Jenkins", company: "Jenkins Contracting", revenue: 35000 },
			{ peopleToMeet: "Mike Scott", company: "Scott Fabrication", revenue: 16000 },
		],
		total: 0,
	},
	{
		centerOfInfluence: "Mary Jensen",
		peoplesInfos: [
			{ peopleToMeet: "Jeff Powell", company: "Jasper Chair", revenue: 45000 },
			{ peopleToMeet: "Matt Janson", company: "Recycling Now", revenue: 11000 },
			{ peopleToMeet: "Tim Peace", company: "Aviation Center", revenue: 15000 },
		],
		total: 0,
	},
	{
		centerOfInfluence: "Alan Kane",
		peoplesInfos: [
			{ peopleToMeet: "Mark Hamilton", company: "Hamilton mattress", revenue: 7500 },
			{ peopleToMeet: "Jon Kaster", company: "Kster Remodel", revenue: 10000 },
			{ peopleToMeet: "Peter Karsten", company: "Karsten Lumber", revenue: 35000 },
		],
		total: 0,
	},
	{
		centerOfInfluence: "",
		peoplesInfos: [
		],
		total: 0,
	},
	{
		centerOfInfluence: "",
		peoplesInfos: [
		],
		total: 0,
	},
	{
		centerOfInfluence: "",
		peoplesInfos: [
		],
		total: 0,
	},
	{
		centerOfInfluence: "",
		peoplesInfos: [
		],
		total: 0,
	},
	{
		centerOfInfluence: "",
		peoplesInfos: [
		],
		total: 0,
	},
	{
		centerOfInfluence: "",
		peoplesInfos: [
		],
		total: 0,
	},



]

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-outcome1',
	templateUrl: './outcome1.component.html',
	styleUrls: ['./outcome1.component.css',
		'../../../../common/common_styles.css']
})
export class Outcome1Component implements OnInit {

	displayedColumns: string[] = ['description', 'benabvavg', 'benbelavg'];
	dataSource = benData;
	constructor(public router:Router) { }
	ngOnInit() {
	}

}

export interface BenifitsElement {
	description: string;
	benabvavg: number;
	benbelavg: number;
}

const benData: BenifitsElement[] = [
	{ description: "With Effective Communication and Education", benabvavg: 83.6, benbelavg: 76.2 },
	{ description: "Without Effective Communication and Education", benabvavg: 25.7, benbelavg: 25.7 },
];

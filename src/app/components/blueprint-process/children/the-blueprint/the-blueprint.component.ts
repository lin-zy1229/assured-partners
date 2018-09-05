import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-the-blueprint',
    templateUrl: './the-blueprint.component.html',
    styleUrls: ['./the-blueprint.component.css',
        '../../../../common/common_styles.css']
})
export class TheBlueprintComponent implements OnInit {

    displayedColumns: string[] = ['description', 'accts', 'revCategory', 'rpr', 'percent'];
    dataSource1 = revData1;
    dataSource2 = revData2;

    constructor(public router: Router) { }
    ngOnInit() {
    }

}

export interface RevenueElement {
    description: string;
    accts: number;
    revCategory: string;
    rpr: string;
    percent: string;
}
const revData1: RevenueElement[] = [
    { description: "Top 20%", accts: 11, revCategory: "118,315.36", rpr: "10,755.94", percent: "67%" },
    { description: "Mid 40%", accts: 22, revCategory: "44,245.84", rpr: "2,212.29", percent: "25%" },
    { description: "Bottom 40%", accts: 22, revCategory: "12,076.42", rpr: "603.82", percent: "7%" },
    { description: "", accts: 55, revCategory: "174,637.62", rpr: "", percent: "" },
];
const revData2: RevenueElement[] = [
    { description: "Top 20%", accts: 3, revCategory: "310,952.31", rpr: "103,650.77", percent: "50%" },
    { description: "Mid 40%", accts: 6, revCategory: "280,867.62", rpr: "46,811.27", percent: "45%" },
    { description: "Bottom 40%", accts: 7, revCategory: "33,998.53", rpr: "4,856.93", percent: "5%" },
    { description: "", accts: 16, revCategory: "625,818.46", rpr: "", percent: "" },
];

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-revenue-table-subitem',
    templateUrl: './revenue-table-subitem.component.html',
    styleUrls: ['./revenue-table-subitem.component.scss'
        , '../../../../common/common_styles.css']
})
export class RevenueTableSubitemComponent implements OnInit {
    dataSource1 = data1;
    dataSource2 = data2;

    columnNames: string[] = ['Client', 'Revenue', '', '# Accts', 'Rev/Category', 'RPR',''];
    constructor() { }

    ngOnInit() {
    }

}
export interface ClientRevenue {
    client: string;
    revenue: number;
    percent: string;
    accts: number;
    rev_category: number;
    rpr: number;
    total_percent: number;
}
const data1: ClientRevenue[] = [
    { client: "Clarksville Community Schools", revenue: 37483.76 , percent: "Top 20%", accts: 11, rev_category: 118315.36, rpr: 10755.94, total_percent: 67 },
    { client: "Power Creative", revenue: 28214.73, percent: "Mid 40%", accts: 22, rev_category: 44245.84, rpr: 2212.29, total_percent: 25 },
    { client: "Kellems & Coe Tool", revenue: 7979.85, percent: "Bottom 40%", accts: 22, rev_category: 12076.42, rpr: 603.82, total_percent: 7 },
    { client: "Zoeller Pump Company, LLC", revenue: 7493.10, percent: "Mid 40%", accts: 55, rev_category: 0, rpr: 2212.29, total_percent: 25 },
    { client: "Laser Images, Inc.", revenue: 6372.63, percent: "", accts: 0, rev_category: 174637.62, rpr: 0, total_percent: 0 },
    { client: "ARK P&C", revenue: 5729.33, percent: "", accts: 0, rev_category: 0, rpr: 0, total_percent: 0 },
    { client: "Stucker Fork Water", revenue: 5511.45, percent: "", accts: 0, rev_category: 0, rpr: 0, total_percent: 0 },
    { client: "J.L. Gilbert Company", revenue: 5298.97, percent: "", accts: 0, rev_category: 0, rpr: 0, total_percent: 0 },
    { client: "CITE", revenue: 5036.11, percent: "", accts: 0, rev_category: 0, rpr: 0, total_percent: 0 },
    { client: "Blue River Services", revenue: 4660.92, percent: "", accts: 0, rev_category: 0, rpr: 0, total_percent: 0 },
    { client: "Indvidual Business", revenue: 4534.51, percent: "", accts: 0, rev_category: 0, rpr: 0, total_percent: 0 },
    { client: "Kellems & Coe Tool P&C", revenue: 4077.25, percent: "", accts: 0, rev_category: 0, rpr: 0, total_percent: 0 },
    { client: "John R. Moore Trucking", revenue: 3978.75, percent: "", accts: 0, rev_category: 0, rpr: 0, total_percent: 0 },
    { client: "Lubrichem Environmental", revenue: 3379.65, percent: "", accts: 0, rev_category: 0, rpr: 0, total_percent: 0 },
    { client: "Riverview Farms, Inc.", revenue: 3257.87, percent: "", accts: 0, rev_category: 0, rpr: 0, total_percent: 0 },
    { client: "John Kenyon Eye Center", revenue: 3188.95, percent: "", accts: 0, rev_category: 0, rpr: 0, total_percent: 0 },
    { client: "Environmental Consultants", revenue: 3131.55, percent: "", accts: 0, rev_category: 0, rpr: 0, total_percent: 0 },
    { client: "E & M Machine", revenue: 2947.66, percent: "", accts: 0, rev_category: 0, rpr: 0, total_percent: 0 },
    { client: "Medscribe", revenue: 2314.24, percent: "", accts: 0, rev_category: 0, rpr: 0, total_percent: 0 },
    { client: "Southern Indiana Neurology", revenue: 1754.70, percent: "", accts: 0, rev_category: 0, rpr: 0, total_percent: 0 },
    { client: "Community Lawn Care", revenue: 1564.44, percent: "", accts: 0, rev_category: 0, rpr: 0, total_percent: 0 },
    { client: "QRS, Inc.", revenue: 1550.00, percent: "", accts: 0, rev_category: 0, rpr: 0, total_percent: 0 },
    { client: "Miller Wholesale Kitche", revenue: 1527.21, percent: "", accts: 0, rev_category: 0, rpr: 0, total_percent: 0 },

]

const data2: ClientRevenue[] = [
    { client: "West Clark Schools", revenue: 164213.67 , percent: "Top 20%", accts: 3, rev_category: 118315.36, rpr: 10755.94, total_percent: 67 },
    { client: "Clarksville Community Schools", revenue: 81221.26 , percent: "Mid 40%", accts: 6, rev_category: 280867.62, rpr: 46811.27, total_percent: 45 },
    { client: "Paramount Healthcare", revenue: 65517.38 , percent: "Bottom 40%", accts: 7, rev_category: 33998.53, rpr: 4856.93, total_percent: 5 },
    { client: "Power Creative", revenue: 63436.38 , percent: "", accts: 16, rev_category: 0, rpr: 0, total_percent: 0 },
    { client: "Salem Community School System", revenue: 63071.24 , percent: "", accts: 0, rev_category: 625818.46, rpr: 0, total_percent: 0 },
    { client: "Ugent Care MSO, LLC", revenue: 59324.35 , percent: "", accts: 0, rev_category: 0, rpr: 0, total_percent: 0 },
    { client: "Cumberland County Hospital", revenue: 31891.84 , percent: "", accts: 0, rev_category: 0, rpr: 0, total_percent: 0 },
    { client: "Zoeller Pump Company, LLC", revenue: 28983.00 , percent: "", accts: 0, rev_category: 0, rpr: 0, total_percent: 0 },
    { client: "Paine Enterprises", revenue: 24100.81 , percent: "", accts: 0, rev_category: 0, rpr: 0, total_percent: 0 },
    { client: "West Washington Schools", revenue: 10060.00 , percent: "", accts: 0, rev_category: 0, rpr: 0, total_percent: 0 },
    { client: "Riverview Farms, Inc.", revenue: 9030.74 , percent: "", accts: 0, rev_category: 0, rpr: 0, total_percent: 0 },
    { client: "J.L. Gilbert Company", revenue: 8661.83 , percent: "", accts: 0, rev_category: 0, rpr: 0, total_percent: 0 },
    { client: "ARK P&C", revenue: 6626.30 , percent: "", accts: 0, rev_category: 0, rpr: 0, total_percent: 0 },
    { client: "Van Hout, USA", revenue: 4354.07 , percent: "", accts: 0, rev_category: 0, rpr: 0, total_percent: 0 },
    { client: "Moore Trucking", revenue: 2735.63 , percent: "", accts: 0, rev_category: 0, rpr: 0, total_percent: 0 },
    { client: "Health Systems of KY", revenue: 2589.96 , percent: "", accts: 0, rev_category: 0, rpr: 0, total_percent: 0 },

]
import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../services/globals.service';

@Component({
    selector: 'app-header-area',
    templateUrl: './header-area.component.html',
    styleUrls: ['./header-area.component.css'],
    providers: [
        GlobalsService
    ]
})

export class HeaderAreaComponent implements OnInit {

    static selectedMainMenu: string;
    gb: GlobalsService;
    constructor(private globals: GlobalsService) {
        this.gb = globals;
    }

    ngOnInit() {

    }

}

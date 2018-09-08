import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-notes-subitem',
    templateUrl: './notes-subitem.component.html',
    styleUrls: ['./notes-subitem.component.scss'
        , '../../../../common/common_styles.css']
})
export class NotesSubitemComponent implements OnInit {

    constructor(public router: Router) {
    }
    ngOnInit() {
    }

}

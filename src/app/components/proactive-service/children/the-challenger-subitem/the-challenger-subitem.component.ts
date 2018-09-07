import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-the-challenger-subitem',
    templateUrl: './the-challenger-subitem.component.html',
    styleUrls: ['./the-challenger-subitem.component.scss',
        '../../../../common/common_styles.css']
})
export class TheChallengerSubitemComponent implements OnInit {

    stage: number = 0;
    constructor(public router: Router) { }

    ngOnInit() {
    }

    onClickShape(_stage) {
        if (this.stage == _stage) {
            this.stage--;
        }
        else if (this.stage < _stage) {
            this.stage = _stage;
        }
        else {
            if (_stage == 0) {
                this.stage = 0;
            } else {
                this.stage = _stage - 1;
            }
        }
    }

}

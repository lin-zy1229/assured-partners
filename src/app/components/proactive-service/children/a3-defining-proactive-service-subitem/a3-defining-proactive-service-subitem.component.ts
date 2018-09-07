import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-a3-defining-proactive-service-subitem',
    templateUrl: './a3-defining-proactive-service-subitem.component.html',
    styleUrls: ['./a3-defining-proactive-service-subitem.component.scss',
        '../../../../common/common_styles.css']
})
export class A3DefiningProactiveServiceSubitemComponent implements OnInit {

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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  Animation_for_4_Shapes, Animation_for_Sentence, Animation_for_3_Shapes, Animation_for_Arrows, Animation_for_Shapes } from '../../../../data/globals';

@Component({
  selector: 'app-ladder-of-abstraction-subitem',
  templateUrl: './ladder-of-abstraction-subitem.component.html',
  styleUrls: ['./ladder-of-abstraction-subitem.component.scss',
  '../../../../common/common_styles.css'],
  animations: [
	Animation_for_3_Shapes,
	Animation_for_Arrows,
	Animation_for_Shapes,
	Animation_for_Sentence,
	// Animation_for_4_Shapes
]
})
export class LadderOfAbstractionSubitemComponent implements OnInit {

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

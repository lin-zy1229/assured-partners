import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outcomes',
  templateUrl: './outcomes.component.html',
  styleUrls: ['./outcomes.component.css',
    '../../../../common/common_styles.css']
})
export class OutcomesComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}

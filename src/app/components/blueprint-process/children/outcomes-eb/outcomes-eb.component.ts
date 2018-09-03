import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outcomes-eb',
  templateUrl: './outcomes-eb.component.html',
  styleUrls: ['./outcomes-eb.component.css',
  '../../../../common/common_styles.css']
})
export class OutcomesEBComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}

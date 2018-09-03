import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-the-advisor-consultant',
  templateUrl: './the-advisor-consultant.component.html',
  styleUrls: ['./the-advisor-consultant.component.css',
              '../../../../common/common_styles.css']
})
export class TheAdvisorConsultantComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-the-vaccumn-cleaner-salesperson',
  templateUrl: './the-vaccumn-cleaner-salesperson.component.html',
  styleUrls: ['./the-vaccumn-cleaner-salesperson.component.css',
              '../../../../common/common_styles.css']
})
export class TheVaccumnCleanerSalespersonComponent implements OnInit {

  constructor(public router: Router) { }
  
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-what-makes-you-different',
  templateUrl: './what-makes-you-different.component.html',
  styleUrls: ['./what-makes-you-different.component.css',
  '../../../../common/common_styles.css']
})
export class WhatMakesYouDifferentComponent implements OnInit {

  constructor(public router: Router) { }
  
  ngOnInit() {
  }

}

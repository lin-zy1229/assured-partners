import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apowerful-discovery-session',
  templateUrl: './apowerful-discovery-session.component.html',
  styleUrls: ['./apowerful-discovery-session.component.css',
    '../../../../common/common_styles.css']
})
export class APowerfulDiscoverySessionComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}

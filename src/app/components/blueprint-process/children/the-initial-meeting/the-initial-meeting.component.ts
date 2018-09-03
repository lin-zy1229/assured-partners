import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-the-initial-meeting',
  templateUrl: './the-initial-meeting.component.html',
  styleUrls: ['./the-initial-meeting.component.css',
    '../../../../common/common_styles.css']
})
export class TheInitialMeetingComponent implements OnInit {

  constructor(public router: Router) { }
  
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css',
  '../../../../common/common_styles.css']
})
export class NotesComponent implements OnInit {

  constructor(public router: Router) { }
  ngOnInit() {
  }

}

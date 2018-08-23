import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-scorecard',
  templateUrl: './the-scorecard.component.html',
  styleUrls: ['./the-scorecard.component.css',
  '../../../../common/common_styles.css']
})
export class TheScorecardComponent implements OnInit {

  questions: Question[] = [
    {color: "", first: "We do not have a clear vision for our benefits strategy", 
    last: "We have a clear, well-defined vision of our benefits strategy"  },
    
    {color: "green", first: "Our employees do not fully understand and appreciate the value of their benefit plan", 
    last: "Our employees fully understand and appreciate the value of their benefit plan"},

    {color: "", first: "Employees do not understand or take responsibility for decisions and actions that impact their benefits", 
    last: "Employees understand and take responsibility for decisions and actions that impact their benefits"},

    {color: "green", first: "We do not have clear metrics for benchmarking benefits, or measuring performance, progress and return on investment", 
    last: "We have an effective system for benchmarking benefits, and measuring performance, progress and return on investment"},

    {color: "", first: "Our benefits program is viewed as a complicated burdensome cost and a necessary evil", 
    last: "Our streamlines benefit programs are viewed as a strategic way to achieve our corporate objectives"},

    {color: "green", first: "We are not certain that our HR and benefit programs are 100% incompliance", 
    last: "We are certain that our HR and benefit programs are 100% in compliance"},

    {color: "", first: "The presentation, communication, and education around our benefits does not motivate or engage our employees", 
    last: "The clear and effective presentation, communication, and education around our benefits motivates and engages our employees"},

    {color: "green", first: "We do not have a culture of health", 
    last: "We embrace and foster a culture of health"},

    {color: "", first: "Circumstances beyond our control are forcing us to shift a growing amoount of benefit program costs to employees", 
    last: "We are in control of benefit program costs and maintain an equitable financing arrangement with our employees"},

    {color: "green", first: "Our annual renewal process is reactive and causes anciety, confusion, and frustration", 
    last: "Our annual renewal process is proactive, orderly, simple and satisfying"},

  ];

  constructor() { }

  ngOnInit() {
  }

}

export interface Question {
  first: string;
  last: string;
  color: string;
}


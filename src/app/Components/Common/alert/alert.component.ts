import { Component, OnInit, Output, Input } from '@angular/core';
import { trigger, transition, animate, animateChild, state, style } from '@angular/animations';


// interface Alert {
//   type: string;
//   message: string;
// }
// const ALERTS: Alert[] = [{
//   type: 'success',
//   message: 'This is an success alert',
// }, {
//   type: 'info',
//   message: 'This is an info alert',
// }, {
//   type: 'warning',
//   message: 'This is a warning alert',
// }, {
//   type: 'danger',
//   message: 'This is a danger alert',
// }, {
//   type: 'primary',
//   message: 'This is a primary alert',
// }, {
//   type: 'secondary',
//   message: 'This is a secondary alert',
// }, {
//   type: 'light',
//   message: 'This is a light alert',
// }, {
//   type: 'dark',
//   message: 'This is a dark alert',
// }
// ];


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 0
      })),
      state('close', style({
        opacity: 1
      })),
      transition(':enter', [
        animate('100ms ease-in-out', style({ opacity: 0 })),
        animateChild()
      ]),
      transition(':leave', [
        animate('1s', style({opacity : 1}))
      ])
    ])
  ]
})
export class AlertComponent implements OnInit {

  @Input() alertBoxType: string;
  @Input() isAlertBoxVisible: boolean;
  @Input() alertBoxMessage: string;

  constructor() {
    this.alertBoxMessage = 'testin';
  }

  close() {
    this.alertBoxMessage = 'Hiding message';
    this.isAlertBoxVisible = false;
  }

  reset() {
    this.alertBoxMessage = '';
  }
  ngOnInit() {
  }
}

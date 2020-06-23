import { Component, OnInit } from '@angular/core';
import { EmployeeList  } from 'src/app/Modals/employee-list';
import { trigger, state, transition, animate, style, animateChild } from '@angular/animations';

@Component({
  selector: 'app-employee-setting',
  templateUrl: './employee-setting.component.html',
  styleUrls: ['./employee-setting.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 0
      })),
      state('close', style({
        opacity: 1
      })),
      transition(':enter', [
        animate('100ms', style({ opacity: 0 })),
        animateChild()
      ]),
      transition(':leave', [
        animate('1s', style({opacity : 1}))
      ])
    ])
  ]
})
export class EmployeeSettingComponent implements OnInit {

  EmployeeListModel: EmployeeList[] = [];
  isOpen = false;
  constructor() { }

  ngOnInit() {
    this.isOpen = true;
  }
}






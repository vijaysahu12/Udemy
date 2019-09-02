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

  constructor() { }

  ngOnInit() {
    this.GetEmployees();
  }

  GetEmployees() {
    this.EmployeeListModel.push({
      EmployeeName: 'vijay sahu',
      ProjectName: '',
      Times: '',
      PrimarySkills: '',
      SecondarySkills: '',
    });
    this.EmployeeListModel.push({
      EmployeeName: 'vijay sahu',
      ProjectName: '',
      Times: '',
      PrimarySkills: '',
      SecondarySkills: '',
    });
    this.EmployeeListModel.push({
      EmployeeName: 'vijay sahu',
      ProjectName: '',
      Times: '',
      PrimarySkills: '',
      SecondarySkills: '',
    });
    // {
    //   EmployeeName: 'Vijay Sahu', 
    //   ProjectName: 'Compass', 
    //   Time: '0000-0000', 
    //   PrimarySkills: 'Full Stack Developer' , 
    //   PrimarySkills : 'Full Stack Developer' 
    // },
// {Name: 'Susmita Sahu', Project: 'Compass', Time: '0010-0000', Skills: 'Finance', PrimarySkills : 'Full Stack Developer' },
// {Name: 'Shilpi Sahu', Project: 'Compass', Time: '0020-0000', Skills: 'IOS', PrimarySkills : 'Full Stack Developer' },
// {Name: 'Harinder Sahu', Project: 'Compass', Time: '0030-0000', Skills: 'ShareMarket', PrimarySkills : 'Full Stack Developer' }


  }
}






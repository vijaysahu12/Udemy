import { Component, OnInit } from '@angular/core';
import { AnimateList, AnimateLeftToRight, ScaleAnimation, UpAndDown, SlideBarMenu, PopUp } from 'src/Animation/Animation';
@Component({
  selector: 'app-table-animation',
  templateUrl: './table-animation.component.html',
  styleUrls: ['./table-animation.component.css'],
  animations: [AnimateList, AnimateLeftToRight, ScaleAnimation, UpAndDown, SlideBarMenu, PopUp]
})
export class TableAnimationComponent implements OnInit {

  data = [];
  constructor() { }

  ngOnInit() {

    this.data.push({
      userId: 1,
      jobTitleName: 'Developer',
      firstName: 'Romin',
      lastName: 'Irani',
      preferredFullName: 'Romin Irani',
      employeeCode: 'E1',
      region: 'CA',
      phoneNumber: '408-1234567',
      emailAddress: 'romin.k.irani@gmail.com',
      IsRostered: 1,
      IsSelected: 1
    });

    this.data.push({
      userId: 2,
      jobTitleName: 'Developer',
      firstName: 'BNeil',
      lastName: 'Irani',
      preferredFullName: 'Neil Irani',
      employeeCode: 'E2',
      region: 'CA',
      phoneNumber: '408-1111111',
      emailAddress: 'neilrirani@gmail.com',
      IsRostered: 1,
      IsSelected: 2
    });

    this.data.push({
      userId: 3,
      jobTitleName: 'Program Directory',
      firstName: 'cTom',
      lastName: 'Hanks',
      preferredFullName: 'Tom Hanks',
      employeeCode: 'E3',
      region: 'CA',
      phoneNumber: '408-2222222',
      emailAddress: 'tomhanks@gmail.com',
      IsRostered: 1,
      IsSelected: 2
    });

    this.data.push({
      userId: 4,
      jobTitleName: 'Program Directory',
      firstName: 'Michel',
      lastName: 'Josh',
      preferredFullName: 'Michel Josh',
      employeeCode: 'E3',
      region: 'CA',
      phoneNumber: '408-2222222',
      emailAddress: 'tomhanks@gmail.com',
      IsRostered: 1,
      IsSelected: 1
    });
    this.data.push({
      userId: 4,
      jobTitleName: 'Program Directory',
      firstName: 'Steve',
      lastName: 'Jobs',
      preferredFullName: 'Steve Jobs',
      employeeCode: 'E3',
      region: 'CA',
      phoneNumber: '408-2222222',
      emailAddress: 'tomhanks@gmail.com',
      IsRostered: 1,
      IsSelected: 1
    });

    this.data.push({
      userId: 4,
      jobTitleName: 'Program Directory',
      firstName: 'Tim',
      lastName: 'Cooks',
      preferredFullName: 'Time Cook',
      employeeCode: 'E3',
      region: 'CA',
      phoneNumber: '408-2222222',
      emailAddress: 'tomhanks@gmail.com',
      IsRostered: 1,
      IsSelected: 1
    });
    this.data.push({
      userId: 5,
      jobTitleName: 'Program Directory',
      firstName: 'Amit',
      lastName: 'Jhape',
      preferredFullName: 'Time Cook',
      employeeCode: 'E3',
      region: 'CA',
      phoneNumber: '408-2222222',
      emailAddress: 'tomhanks@gmail.com',
      IsRostered: 0,
      IsSelected: 0
    });
    this.SortingTheList(this.data);
  }

  SortingTheList(list: any) {

    list.sort((a, b) => b - a);

    list.sort(( a , b) => {
      if (a.IsSelected === 1) {
        return -1;
      }

      if(a.IsSelected !== 1){
        return 0;
      }
    });
  }

}

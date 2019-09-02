import { Component, OnInit } from '@angular/core';
import { AnimateList, AnimateLeftToRight, ScaleAnimation, UpAndDown, SlideBarMenu, PopUp } from 'src/Animation/Animation';
@Component({
  selector: 'app-table-animation',
  templateUrl: './table-animation.component.html',
  styleUrls: ['./table-animation.component.css'],
  animations: [AnimateList, AnimateLeftToRight , ScaleAnimation , UpAndDown , SlideBarMenu , PopUp]
})
export class TableAnimationComponent implements OnInit {

  data = [];
  constructor() { }

  ngOnInit() {
    this.data.push({
      name: 'vijay',
      gender: 'Male',
      age: '29',
      dateOfBirth: '09-07-1990',
      birthPlace: 'Haridwar',
      organization: 'Amdocs',
      salary: '25,000',
    });
    this.data.push({
      name: 'vijay',
      gender: 'Male',
      age: '29',
      dateOfBirth: '09-07-1990',
      birthPlace: 'Haridwar',
      organization: 'Amdocs',
      salary: '25,000',
    });
    this.data.push({
      name: 'vijay',
      gender: 'Male',
      age: '29',
      dateOfBirth: '09-07-1990',
      birthPlace: 'Haridwar',
      organization: 'Amdocs',
      salary: '25,000',
    });
    this.data.push({
      name: 'vijay',
      gender: 'Male',
      age: '29',
      dateOfBirth: '09-07-1990',
      birthPlace: 'Haridwar',
      organization: 'Amdocs',
      salary: '25,000',
    });
    this.data.push({
      name: 'vijay',
      gender: 'Male',
      age: '29',
      dateOfBirth: '09-07-1990',
      birthPlace: 'Haridwar',
      organization: 'Amdocs',
      salary: '25,000',
    });
    this.data.push({
      name: 'vijay',
      gender: 'Male',
      age: '29',
      dateOfBirth: '09-07-1990',
      birthPlace: 'Haridwar',
      organization: 'Amdocs',
      salary: '25,000',
    });
    this.data.push({
      name: 'vijay',
      gender: 'Male',
      age: '29',
      dateOfBirth: '09-07-1990',
      birthPlace: 'Haridwar',
      organization: 'Amdocs',
      salary: '25,000',
    });
    this.data.push({
      name: 'vijay',
      gender: 'Male',
      age: '29',
      dateOfBirth: '09-07-1990',
      birthPlace: 'Haridwar',
      organization: 'Amdocs',
      salary: '25,000',
    });
    this.data.push({
      name: 'vijay',
      gender: 'Male',
      age: '29',
      dateOfBirth: '09-07-1990',
      birthPlace: 'Haridwar',
      organization: 'Amdocs',
      salary: '25,000',
    });
    this.data.push({
      name: 'vijay',
      gender: 'Male',
      age: '29',
      dateOfBirth: '09-07-1990',
      birthPlace: 'Haridwar',
      organization: 'Amdocs',
      salary: '25,000',
    });
    this.data.push({
      name: 'vijay',
      gender: 'Male',
      age: '29',
      dateOfBirth: '09-07-1990',
      birthPlace: 'Haridwar',
      organization: 'Amdocs',
      salary: '25,000',
    });
    this.data.push({
      name: 'vijay',
      gender: 'Male',
      age: '29',
      dateOfBirth: '09-07-1990',
      birthPlace: 'Haridwar',
      organization: 'Amdocs',
      salary: '25,000',
    });
  }

}

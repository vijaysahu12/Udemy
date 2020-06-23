import { trigger, state, style, transition, animate, animateChild } from '@angular/animations';

import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/Service/AuthService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.css', './custom-dropdown.component.scss'],
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
export class HomeComponent implements OnInit {
  isLoading = true;
  newOption: any;
  listOfEmployee: any;
  drpValue: any;
  options: any;
  currentSelection: any;
  UrlId: any;

  CitiesSelected: [] = [];
  // Alert Box Code

    alertBoxType = 'danger';
    isAlertBoxVisible = true;
    alertBoxMessage = 'Testing by vijay sahu, Passing value from Parent to Child Component.';


  // Alert Box End Code

  constructor(private activatedRoute: ActivatedRoute, private accService: AuthService) {



    this.newOption = '';
    this.listOfEmployee = [
      {Name: 'Vijay Sahu', Project: 'Compass', Time: '0000-0000', Skills: 'Full Stack Developer' , PrimarySkills : 'Full Stack Developer' },
      {Name: 'Susmita Sahu', Project: 'Compass', Time: '0010-0000', Skills: 'Finance', PrimarySkills : 'Full Stack Developer' },
      {Name: 'Shilpi Sahu', Project: 'Compass', Time: '0020-0000', Skills: 'IOS', PrimarySkills : 'Full Stack Developer' },
      {Name: 'Harinder Sahu', Project: 'Compass', Time: '0030-0000', Skills: 'ShareMarket', PrimarySkills : 'Full Stack Developer' }];

    this.drpValue = [
        {Id: 1, value: '0900-1900'},
        {Id: 1, value: '0930-1930'},
        {Id: 1, value: '1000-2000'},
        {Id: 1, value: '1030-2030'},
        {Id: 1, value: '1100-2100'},
        {Id: 1, value: '1130-2130'},
        {Id: 1, value: '1200-2200'}
      ];

    this.options = [
        {name: 'Bangalore', id: 1},
        {name: 'Chennai', id: 2},
        {name: 'Erode', id: 3},
        {name: 'Bangkok', id: 4},
        {name: 'Jammu', id: 5},
        {name: 'Madurai', id: 6},
        {name: 'Goa', id: 7},
        {name: 'Mumbai', id: 8},
        {name: 'Kolkata', id: 9},
        {name: 'Shillong', id: 10},
        {name: 'Cochin', id: 11},
        {name: 'Mysore', id: 12},
      ];

    this.currentSelection = {
        name: 'Chennai'
      };

   }// constructor end block
   isOpen = false;
  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      this.UrlId = param.id;
      console.log('Test : ' + this.activatedRoute.snapshot.paramMap.get('id'));
    });

    const resultService = this.accService.signUp(this.UrlId);

    console.log(resultService);
    this.isLoading = false;
    this.isOpen = true;
  }

  setCurrentSelection( option) {
    this.currentSelection = option;
  }

  addNewData() { }


  HideAlertBox() {
    alert('working');
  }
}

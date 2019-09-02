import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, animateChild } from '@angular/animations';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { forbiddenNameValidator } from 'src/app/Shared/forbidden-name.directive';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/takeWhile';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';


@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
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
export class AngularComponent implements OnInit {
  heroForm: any;
  hero: any;

  numberIs = 0;

  currentTime: Date;
  constructor() { }

  ngOnInit() {

    // this.heroForm = new FormGroup({
    //   name: new FormControl(this.hero.name, [
    //     Validators.required,
    //     Validators.minLength(4),
    //     forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
    //   ]),
    //   alterEgo: new FormControl(this.hero.alterEgo),
    //   power: new FormControl(this.hero.power, Validators.required)
    // });

    this.CurrentTimeValue();
  }
  get name() { return this.heroForm.get('name'); }

  get power() { return this.heroForm.get('power'); }


  CurrentTimeValue() {
    // tslint:disable-next-line: no-unused-expression
    IntervalObservable.create(1000)
      .takeWhile(() => true) // only fires when component is alive
      .subscribe(() => {
        this.currentTime = new Date();

        this.numberIs = this.numberIs + 1;
      });
  }
}

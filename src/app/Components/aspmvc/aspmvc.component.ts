import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, animateChild } from '@angular/animations';
@Component({
  selector: 'app-aspmvc',
  templateUrl: './aspmvc.component.html',
  styleUrls: ['./aspmvc.component.css'],
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
export class AspmvcComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

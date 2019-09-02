import { trigger, state, transition, style, animate, query, stagger, keyframes } from '@angular/animations';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { relative } from 'path';
import { BlockingProxy } from 'blocking-proxy';

export const SlideBarMenu = [
    trigger('SlideBarMenu', [
      state('in', style( {
        transform: 'translate3d(0, 0, 0)',
        display: 'block'
      })),
      state('out', style({
        transform: 'translate3d(-100%, 0, 0)',
        display: 'none'
      })),
      transition('in => out', animate('600ms ease-in')),
      transition('out => in', animate('600ms ease-in'))
    ])
  ];

export const AnimateList = trigger('AnimateList', [
  transition('* <=> *', [
    query(':leave', [
        stagger('0.5s', [
            animate('.5s', style({opacity: 0 , background: 'Tomato'}))
          ]
    )], { optional: true }),
    query(':enter', [
      stagger('0.5s', [
          style({opacity: 0 , background: 'LightYellow'}),
          animate('1s', style({opacity: 1}))
    ])], { optional: true })
  ]),
]);



export const AnimateLeftToRight =
trigger('AnimateLeftToRight', [
  transition('* => *', [

    query(':enter', style({ opacity: 0 }), { optional: true }),

    query(':enter', stagger('300ms', [
      animate('1s ease-in', keyframes([
        style({ opacity: 0, transform: 'translateX(-75%)', offset: 0 }),
        style({ opacity: .5, transform: 'translateX(35px)', offset: 0.3 }),
        style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 }),
      ]))]), { optional: true }),

    query(':leave', stagger('300ms', [
      animate('1s ease-in', keyframes([
        style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
        style({ opacity: .5, transform: 'translateX(35px)', offset: 0.3 }),
        style({ opacity: 0, transform: 'translateX(-75%)', offset: 1.0 }),
      ]))]), { optional: true })
  ])
]);


export const AnimateCalendar =
trigger('AnimateCalendar', [
  transition('* => *', [

    query(':enter', style({ opacity: 0 }), { optional: true }),

    query(':enter', stagger('100ms', [
      animate('1s ease-in', keyframes([
        style({ opacity: 0, transform: 'translateY(-75%)  ', offset: 0 }),
        style({ opacity: .7, transform: 'translateX(35px) ', offset: 0.3 }),
        style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 }),
      ]))]), { optional: true }),

    query(':leave', stagger('300ms', [
      animate('1s ease-in', keyframes([
        style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
        style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
        style({ opacity: 0, transform: 'translateY(-75%)', offset: 1.0 }),
      ]))]), { optional: true })
  ])
]);

export const ScaleAnimation =
trigger('ScaleAnimation', [
  transition('* => *', [

    query(':enter', style({ opacity: 0 }), { optional: true }),

    query(':enter', stagger('300ms', [
      animate('1s ease-in', keyframes([
        style({ opacity: 0, transform: 'scale(0.2)', offset: 0 }),
        style({ opacity: .8, transform: 'scale(0.5)', offset: 0.7 }),
        style({ opacity: 1, transform: 'scale(1)', offset: 0.9 }),
      ]))]), { optional: true }),

    query(':leave', stagger('300ms', [
      animate('1s ease-out', keyframes([
        style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
        style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
        style({ opacity: 0, transform: 'translateY(-75%)', offset: 1.0 }),
      ]))]), { optional: true })
  ])
]);


export const UpAndDown =
trigger('UpAndDown', [
  transition('* => *', [

    query(':enter', style({ opacity: 0 }), { optional: true }),

    query(':enter', stagger('100ms', [
      animate('1s ease-in', keyframes([
        style({ opacity: 0, transform: 'translateY(-75%)  ', offset: 0 }),
        style({ opacity: .7, transform: 'translateX(35px) ', offset: 0.3 }),
        style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 }),
      ]))]), { optional: true }),

    query(':leave', stagger('300ms', [
      animate('1s ease-in', keyframes([
        style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
        style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
        style({ opacity: 0, transform: 'translateY(-75%)', offset: 1.0 }),
      ]))]), { optional: true })
  ])
]);


export const PopUp =
trigger('PopUp', [
  transition('* => *', [

    query(':enter', style({ opacity: 0 }), { optional: true }),

    query(':enter', stagger('100ms', [
      animate('1s ease-in', keyframes([
        style({ opacity: 0, transform: 'translateY(-5%)  ', offset: 0 }),
        style({ opacity: .2, transform: 'translateY(5px) ', offset: 0.3 }),
        style({ opacity: .5, transform: 'translateY(-5px) ', offset: 0.5 }),
        style({ opacity: .7, transform: 'translateY(15px) ', offset: 0.7 }),
        style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
      ]))]), { optional: true }),

    query(':leave', stagger('300ms', [
      animate('1s ease-in', keyframes([
        style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
        style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
        style({ opacity: 0, transform: 'translateY(-75%)', offset: 1.0 }),
      ]))]), { optional: true })
  ])
]);

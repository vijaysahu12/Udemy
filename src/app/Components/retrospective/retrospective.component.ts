import { Component, OnInit } from '@angular/core';
import { RetrospectiveModel, RetroType } from 'src/app/Modals/Retrospective.model';
import { trigger, state, style, transition, animate, query, stagger, keyframes } from '@angular/animations';

@Component({
  selector: 'app-retrospective',
  templateUrl: './retrospective.component.html',
  styleUrls: ['./retrospective.component.css'],
  animations: [
    trigger('shrinkOut', [
      state('in', style({ height: '*' })),
      transition('* => void', [
        style({ height: '*' }),
        animate(250, style({ height: 0 }))
      ])
    ]),
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(800)),
    ]),
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s 300ms ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ]),
    trigger('items', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),  // initial
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)', 
          style({ transform: 'scale(1)', opacity: 1 }))  // final
      ])
    ]),
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])
  ]
})
export class RetrospectiveComponent implements OnInit {

  textAreaValue = '';
  textEditorForWell = false;
  textEditorForWrong = false;
  currentAction: RetroType;
  retroType = RetroType;
  wentWell: RetrospectiveModel[] = [];
  wentWrong: RetrospectiveModel[] = [];
  actionTaken: RetrospectiveModel[] = [];
  constructor() { }

  ngOnInit() {

    this.wentWell.push({
      text: 'Testing 1 Testing 1 Testing 1 Testing 1 Testing 1 Testing 1 Testing 1 Testing 1 Testing 1 Testing 1 Testing 1 Testing 1 Testing 1 Testing 1 ',
      CreatedBy: 1,
      editable: true,
      voteUp: 0,
      voteDown: 0,
      type: RetroType.well
    });
    this.wentWell.push({
      text: 'Testing 1',
      CreatedBy: 1,
      editable: true,
      voteUp: 0,
      voteDown: 0,
      type: RetroType.well
    });
    this.wentWrong.push({
      text: 'Testing 1',
      CreatedBy: 1,
      voteUp: 0,
      voteDown: 0,
      editable: true,
      type: RetroType.wrong
    });
    this.wentWrong.push({
      text: 'Testing 1',
      CreatedBy: 1,
      voteUp: 0,
      voteDown: 0,
      editable: true,
      type: RetroType.wrong
    });
    this.actionTaken.push({
      text: 'Testing 1',
      CreatedBy: 1,
      voteUp: 0,
      voteDown: 0,
      editable: true,
      type: RetroType.action
    });
  }


  addItem(actionType: RetroType) {
    this.currentAction = actionType;
    this.hideShowTextEditor();
  }

  hideShowTextEditor( ) {
    if ( this.currentAction === this.retroType.well) {
      this.textEditorForWell = true;
      this.textEditorForWrong = !this.textEditorForWell;
    } else {
      this.textEditorForWrong = true;
      this.textEditorForWell = !this.textEditorForWrong ;
    }
  }

  onTextEnter(event) {
    debugger
    if (event !== undefined && event != null && event !== '' && event.toString().trim().length > 1 ) {
      if (this.currentAction === RetroType.well) {
        console.log('well ');
        this.wentWell.push({
          text: event,
          CreatedBy: 1,
          editable: true,
          type: RetroType.well,
          voteDown: 0,
          voteUp: 0
        });
      } else if (this.currentAction === RetroType.wrong) {
        this.wentWrong.push({
          text: event,
          CreatedBy: 1,
          voteDown: 0,
          voteUp: 0,
          editable: true,
          type: RetroType.well
        });
      }
      this.textAreaValue = '';
    }
  }

  toggle() {
    this.textEditorForWrong =  false;
    this.textEditorForWell = false;
  }
}










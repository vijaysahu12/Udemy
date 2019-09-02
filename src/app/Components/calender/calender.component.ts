import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// tslint:disable-next-line: import-spacing
import { AnimateCalendar} from  'src/Animation/Animation';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css'],
  animations: [AnimateCalendar]
})
export class CalenderComponent implements OnInit {
  title = 'Calendar View';
  @Output() pageNameChangeEvent = new EventEmitter();

  ListOfCards: string[] = [];
  constructor() {
      console.log('CalenderComponent constructor caled ');

      this.ListOfCards.push('vijay');
      this.ListOfCards.push('vijay');
      this.ListOfCards.push('vijay');
      this.ListOfCards.push('vijay');
      this.ListOfCards.push('vijay');
      this.ListOfCards.push('vijay');
      this.ListOfCards.push('vijay');
      this.ListOfCards.push('vijay');
      this.ListOfCards.push('vijay');
      this.ListOfCards.push('vijay');
      this.ListOfCards.push('vijay');
      this.ListOfCards.push('vijay');
      this.ListOfCards.push('vijay');
      this.ListOfCards.push('vijay');
      this.ListOfCards.push('vijay');
      this.ListOfCards.push('vijay');
   }

  ngOnInit() {
    console.log('ngOnInitialise constructor caled ');
    this.pageNameChangeEvent.emit(this.title);
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { EmployeeList  } from 'src/app/Modals/employee-list';
// tslint:disable-next-line: import-spacing
import { AnimateList , AnimateLeftToRight} from  'src/Animation/Animation';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  animations: [AnimateList, AnimateLeftToRight]
})

export class EmployeeListComponent implements OnInit {

  @Input() EmployeeListModel: EmployeeList;

  constructor() { }
  ngOnInit() {
  }
}

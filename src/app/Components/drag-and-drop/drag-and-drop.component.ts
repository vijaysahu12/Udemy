import { Component, OnInit } from '@angular/core';
import { DropEvent } from 'src/app/Events/DropEvent';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent implements OnInit {

  constructor() { }
  list1 = [
    { name: 'Toyota' },
    { name: 'Bugati' },
    { name: 'Suzuki' }
  ];

  list2 = [
    { name: 'Mercedes' },
    { name: 'Honda' },
    { name: 'BMW' }
  ];
  EmployeeList = [];
  ngOnInit() {
    this.EmployeeList.push({
      Name: 'vijay sahu',
      FatherName: 'C.S.Sahu',
      MotherName: 'Shrikuntala Sahu'
    });

    this.EmployeeList.push({
      Name: 'Harinder sahu',
      FatherName: 'C.S.Sahu',
      MotherName: 'Shrikuntala Sahu'
    });

  }



  onList1Drop(e: DropEvent) {
    this.list1.push(e.dragData);
    this.removeItem(e.dragData, this.list2)
  }

  onList2Drop(e: DropEvent) {
    this.list2.push(e.dragData);
    this.removeItem(e.dragData, this.list1)
  }

  removeItem(item: any, list: Array<any>) {
    let index = list.map(function (e) {
      return e.name
    }).indexOf(item.name);
    list.splice(index, 1);
  }

}

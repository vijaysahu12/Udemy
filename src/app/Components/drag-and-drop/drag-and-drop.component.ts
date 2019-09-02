import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent implements OnInit {

  constructor() { }

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

}

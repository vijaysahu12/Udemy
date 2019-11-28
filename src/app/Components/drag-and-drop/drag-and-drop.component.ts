import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DropEvent } from 'src/app/Events/DropEvent';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent implements OnInit , AfterViewInit {

  constructor() { }
  classValues = '';
  isAnyCellClicked = false;
  firstRow = 0;
  lastRow = 0;
  firstCell = 0;
  lastCell = 0;

  @ViewChild('myDiv', {static: false}) divView: ElementRef;

  @ViewChild('tableContainer', {static: false}) tableBody: ElementRef;



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


  ngAfterViewInit() {

    console.log(this.divView);
    this.divView.nativeElement.innerHTML = 'Hello Angular 8!';

  }
  ngOnInit() {
    this.EmployeeList.push({
      Name: 'vijay sahu',
      FatherName: 'C.S.Sahu',
      MotherName: 'Shrikuntala Sahu',
      Profession: 'Full Stack Developer',
      Company: 'Amdocs',
      Address: 'Haridwar'
    });

    this.EmployeeList.push({
      Name: 'Harinder sahu',
      FatherName: 'C.S.Sahu',
      MotherName: 'Shrikuntala Sahu',
      Profession: 'Share Market',
      Company: 'KingResearch',
      Address: 'Haridwar'
    });

    this.EmployeeList.push({
      Name: 'Ramit sahu',
      FatherName: 'C.S.Sahu',
      MotherName: 'Shrikuntala Sahu',
      Profession: 'Full Stack Developer',
      Company: 'Amdocs',
      Address: 'Haridwar'
    });

    this.EmployeeList.push({
      Name: 'Shilpi sahu',
      FatherName: 'C.S.Sahu',
      MotherName: 'Shrikuntala Sahu',
      Profession: 'Share Market',
      Company: 'KingResearch',
      Address: 'Haridwar'
    });
    this.EmployeeList.push({
      Name: 'vijay sahu',
      FatherName: 'C.S.Sahu',
      MotherName: 'Shrikuntala Sahu',
      Profession: 'Full Stack Developer',
      Company: 'Amdocs',
      Address: 'Haridwar'
    });

    this.EmployeeList.push({
      Name: 'Harinder sahu',
      FatherName: 'C.S.Sahu',
      MotherName: 'Shrikuntala Sahu',
      Profession: 'Share Market',
      Company: 'KingResearch',
      Address: 'Haridwar'
    });

    this.EmployeeList.push({
      Name: 'Ramit sahu',
      FatherName: 'C.S.Sahu',
      MotherName: 'Shrikuntala Sahu',
      Profession: 'Full Stack Developer',
      Company: 'Amdocs',
      Address: 'Haridwar'
    });

    this.EmployeeList.push({
      Name: 'Shilpi sahu',
      FatherName: 'C.S.Sahu',
      MotherName: 'Shrikuntala Sahu',
      Profession: 'Share Market',
      Company: 'KingResearch',
      Address: 'Haridwar'
    });
  }

  MouseHover($event) {
    // $event.fromElement.className

    if (this.isAnyCellClicked) {

      this.lastRow = $event.currentTarget.closest('tr').rowIndex;
      this.lastRow = this.lastRow - 1;
      this.lastCell = $event.currentTarget.parentElement.cellIndex;
      this.tableBody.nativeElement.rows[this.lastRow].cells[this.lastCell].childNodes[0].className = 'clickedClass';

      console.log('(' + (this.firstRow - 1 ) + ', ' + this.firstCell + ') , (' + (this.lastRow) + ', ' + this.lastCell + ')');

      for (let i = this.firstRow; i <= this.lastRow; i++) {
        for (let j = this.firstCell; j <= this.lastCell; j++) {

            this.tableBody.nativeElement.rows[i].cells[j].childNodes[0].className = 'clickedClass';
            this.tableBody.nativeElement.children[i].cells[j].childNodes[0].innerText =
            this.tableBody.nativeElement.children[this.firstRow].cells[this.firstCell].childNodes[0].innerText;
        }
      }
    }
  }
  MouseUp() {
    this.isAnyCellClicked = false;
    console.log('vijay');
  }
  MouseDownEvent($event) {
    this.ResetTableCellClass();
    this.isAnyCellClicked = true;
    this.firstRow = $event.currentTarget.parentElement.closest('tr').rowIndex;
    this.firstRow = this.firstRow - 1;
    this.firstCell = $event.currentTarget.parentElement.cellIndex;
    $event.currentTarget.className = 'clickedClass';
  }


  ResetTableCellClass() {
    const totalRows = this.tableBody.nativeElement.rows.length - 1;
    const totalCells = this.tableBody.nativeElement.rows[0].cells.length - 1;

    for (let i = 0; i <= totalRows; i++) {
      for (let j = 0; j <= totalCells; j++) {
        if (this.tableBody.nativeElement.rows[i].cells[j].childNodes[0].className === 'clickedClass') {
          this.tableBody.nativeElement.children[i].cells[j].childNodes[0].className =
          this.tableBody.nativeElement.children[i].cells[j].childNodes[0].className.toString().replace('clickedClass', '');
       }
      }
    }
  }

  focusTD(rowNum, cellNum) {
    this.tableBody.nativeElement.rows[rowNum].cells[cellNum].focus();
  }

  onList1Drop(e: DropEvent) {
    this.list1.push(e.dragData);
    this.removeItem(e.dragData, this.list2);
  }

  onList2Drop(e: DropEvent) {
    this.list2.push(e.dragData);
    this.removeItem(e.dragData, this.list1);
  }

  removeItem(item: any, list: Array<any>) {
    let index = list.map(function (e) {
      return e.name
    }).indexOf(item.name);
    list.splice(index, 1);
  }

}

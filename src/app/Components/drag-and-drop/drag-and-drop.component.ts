import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { DropEvent } from 'src/app/Events/DropEvent';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent implements OnInit, OnDestroy, AfterViewInit {

  constructor() { }
  classValues = '';
  isAnyCellClicked = false;
  firstRow = 0;
  lastRow = 0;
  firstCell = 0;
  lastCell = 0;
  isOpen = false;
  shiftClass = 'cell';
  draggedClass = 'clickedClass';
  @ViewChild('tableContainer', { static: false }) tableBody: ElementRef;



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

  randomDate() {
    const start = new Date();
    const end = new Date(new Date().setDate(new Date().getDate() + 500));
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).getDate();
  }

  ngOnInit() {

    this.isOpen = true;
    for (let i = 0; i < 10; i++) {
      this.EmployeeList.push({
        EmpId: 'Row ' + i,
        Name: 'vijay sahu',
        DayOne: this.randomDate(),
        DayTwo: this.randomDate(),
        DayThree: this.randomDate(),
        DayFour: this.randomDate(),
        DayFive: this.randomDate(),
        DaySix: this.randomDate(),
        DaySeven: this.randomDate(),
        DayEight: this.randomDate()
      });
    }
    window.addEventListener('mouseup', this.MouseUpEvent, true); // third parameter
  }

  ngAfterViewInit() {
    this.tableBody.nativeElement.addEventListener('mouseover', this.MouseHover, true);
    this.tableBody.nativeElement.addEventListener('mousedown', this.MouseDownEvent, true);
    // this.divView.nativeElement.innerHTML = 'Hello Angular 8!';
  }
  ngOnDestroy() {
    window.removeEventListener('scroll', this.MouseUpEvent, true);
    window.addEventListener('mouseover', this.MouseHover, true);
    window.addEventListener('mousedown', this.MouseDownEvent, true);
    this.ResetTable();
  }

  MouseOutEvent() {
    console.log('MouseOutEvent trigger');
    

  }

  MouseUpEvent = (event): void => {
    this.lastRow = 0;
    this.lastCell = 0;
    this.ResetTable();
    let row1 = localStorage.getItem('row1');
    let cell1 = (localStorage.getItem('cell1'));
    let it = this.EmployeeList; //.filter(item => item.indexOf(parseInt(row1, 1)))[parseInt(cell1)];
    debugger;
  }

  MouseDownEvent = (event): void => {
    if (event.target.classList.contains('cell')) {
      // this.ResetTableCellClass();
      // this.isAnyCellClicked = true;
      this.firstRow = event.target.parentElement.closest('tr').rowIndex;
      this.firstRow = this.firstRow - 1;
      this.lastRow = this.firstRow;

      this.firstCell = event.target.parentElement.cellIndex;
      event.target.parentElement.classList.add(this.draggedClass);
      this.lastCell = this.firstCell;
      console.log('------------------------------------------------------------');
      console.log('R1:' + this.firstRow, 'R2:' + this.lastRow);
      console.log('C1:' + this.firstCell, 'C2:' + this.lastCell);
      localStorage.setItem('row1', this.firstRow.toString());
      localStorage.setItem('row2', this.lastRow.toString());
      localStorage.setItem('cell1', this.firstCell.toString());
      localStorage.setItem('cell2', this.lastCell.toString());

      localStorage.setItem('isAnyCellClicked', '1');
    }
  }

  MouseHover = (event): void => {
    if (localStorage.getItem('isAnyCellClicked') === '1') {


      // TR/Row hovering from top to bottom
      let row1 = localStorage.getItem('row1');
      let row2 = localStorage.getItem('row2');
      let hoverTr = event.target.closest('tr').rowIndex;
      hoverTr = hoverTr - 1;
      if (hoverTr > row2) {
        row2 = hoverTr;
      } else if (hoverTr < row2) {
        row1 = hoverTr;
        console.log('else part row');
      }// TR/Row hovering

      // TD/Cell hovering from top to bottom
      let cell1 = (localStorage.getItem('cell1'));
      let cell2 = (localStorage.getItem('cell2'));
      const hoverTd = event.target.closest('td').cellIndex;
      if (hoverTd > cell2) {
        cell2 = hoverTd;
      } else if (hoverTd < cell2) {
        cell2 = cell1;
        cell1 = hoverTd;
        this.ResetCol(event, row2, cell1);
      } // TD/Cell hovering
      this.ResetAllCellOnly();
      this.AddColorsOnRowAndTD(row1, row2, cell1, cell2);
    } else {
    }
  }


  AddColorsOnRowAndTD = (row1, row2, cell1, cell2): void => {
    // if (this.tableBody.nativeElement.rows[this.lastRow]) {}
    console.log('(R1:' + row1 + ', R2:' + row2 + ')-(C1:' + cell1 + ', C2:' + cell2 + ')');
    for (let i = row1; i <= row2; i++) {
      const dd = this.tableBody.nativeElement.rows[i] as HTMLTableCellElement;
      for (let j = cell1; j <= cell2; j++) {
        dd.children[j].classList.add('clickedClass');
      }
    }
  }

  ResetCol(event, row, col) {
    console.log('ResetTD: (' + row + ' , ' + col + ')');
    event.target.classList.remove('clickedClass');
    // this.tableBody.nativeElement.rows[row].cells[col].classList.remove('clickedClass');
  }

  resetRow(rowId) {
    const row = this.tableBody.nativeElement.querySelectorAll('tr')[rowId];
    for (let j = this.firstCell; j <= this.lastCell; j++) {
      console.log('cell: ' + j);
      if (row.cells[j].firstElementChild.classList.contains('clickedClass')) {
        console.log(row.cells[j].firstElementChild);
        row.cells[j].firstElementChild.classList = []; //.remove('clickedClass');
        console.log(row.cells[j].firstElementChild);
      }
    }
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

  ResetTable() {
    this.lastRow = 0;
    this.lastCell = 0;
    this.firstRow = 0;
    this.firstCell = 0;
    localStorage.setItem('isAnyCellClicked', '0');

    const e1 = this.tableBody.nativeElement.querySelectorAll('tbody tr td ').forEach(element => {
      element.classList.remove('clickedClass');
      element.firstElementChild.classList.remove('clickedClass');
    });
    console.log('------------------------------------------------------------');
  }

  ResetAllCellOnly() {
    const e1 = this.tableBody.nativeElement.querySelectorAll('tbody tr td ').forEach(element => {
      element.classList.remove('clickedClass');
      element.firstElementChild.classList.remove('clickedClass');
    });
    console.log('-----------------ResetAllCellOnly---------------------------');
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
    const index = list.map(function (e) {
      return e.name;
    }).indexOf(item.name);
    list.splice(index, 1);
  }

}

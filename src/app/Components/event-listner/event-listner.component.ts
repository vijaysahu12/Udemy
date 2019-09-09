import { Component, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { EmployeeList, Days } from 'src/app/Modals/employee-list';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-event-listner',
  templateUrl: './event-listner.component.html',
  styleUrls: ['./event-listner.component.css']
})
export class EventListnerComponent implements OnInit, AfterViewInit {
  selectedExcerptId: any;

  constructor(private elementRef: ElementRef, private datePipe: DatePipe) { }

  Employees: EmployeeList[] = [];
  Days: Days[] = [];
  @ViewChild('myDiv', { static: false }) divView: ElementRef;
  ngOnInit() {
    this.BindHeaderForTable();
    this.BindListOfEmployee();
  }
  BindHeaderForTable() {
    const startDate = new Date();
    const endDate = new Date(new Date().setDate(new Date().getDate() + 6));
    let tempStartDate = startDate;
    while (this.datePipe.transform(tempStartDate, 'yyyy-MM-dd') <= this.datePipe.transform(endDate, 'yyyy-MM-dd')) {

      this.Days.push({
        RosterDate: tempStartDate,
        RosterDayName: this.datePipe.transform(tempStartDate, 'dd'),
        ShiftColor: '#f6faef9c',
        ShiftId: 1,
        ShiftTime: '0530-0630',
      });
      tempStartDate = new Date(tempStartDate.setDate(tempStartDate.getDate() + 1));
    }
  }

  BindListOfEmployee() {
    for (let i = 0; i < 15; i++) {
      this.Employees.push({
        EmployeeName: 'Vijay Sahu',
        ProjectName: 'Hylia',
        ProfileImage: '../assets/image/DefaultLogin.png',
        Days: this.Days
      });
    }
  }
  ngAfterViewInit(): void {

    let currentCellText = '';
    let cellColor;

    this.elementRef.nativeElement.querySelectorAll('.tddragable').forEach(element => {
      element.addEventListener('mousedown', function (event) {
        event.target.draggable = true;
        console.log('press');
        currentCellText = event.srcElement.innerHTML;
        this.selectedExcerptId = event.target.getAttribute('class');
        cellColor = 'dragStart';
        event.target.classList.add(cellColor);
      });

      element.addEventListener('mousemove', function (event) {
        console.log('mousemove');
        if (cellColor !== undefined) {
          event.target.classList.add(cellColor);
          event.srcElement.innerHTML = currentCellText;
        }
      });

      element.addEventListener('mouseup', function (event) {
        console.log('mouseup');
        if (cellColor !== undefined) {
          event.target.classList.add(cellColor);
          event.srcElement.innerHTML = currentCellText;
        }
      });

      element.addEventListener('mousein', function (event) {
        console.log('mousein');
        if (cellColor !== undefined) {
          event.target.classList.add(cellColor);
          event.srcElement.innerHTML = currentCellText;
        }
      });

      // element.addEventListener('mouseleave', function(event) {
      //   if ( this.selectedExcerptId !== undefined && this.selectedExcerptId.length > 0) {
      //     event.srcElement.innerHTML = currentCellText;
      //     event.target.classList.remove('dragStart');
      //     console.log('mouseleave:');
      //   }
      // });

    });
  }

  showExcerptInfo: (any) => void = (event: any): void => {

    this.selectedExcerptId = event.srcElement.id;
    console.log(this.selectedExcerptId);
  }

  onClick(event) {
    if (event.target.classList.contains('delete')) {
      const title = event.target.getAttribute('title');
      if (!confirm('sure u want to delete ' + title)) {
        event.preventDefault();
      }
    }
  }
}

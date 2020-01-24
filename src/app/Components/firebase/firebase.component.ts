import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, animateChild } from '@angular/animations';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { currentId } from 'async_hooks';
@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css'],
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
export class FirebaseComponent implements OnInit {

  constructor(private firebase: AngularFireDatabase) { }
  customerList: AngularFireList<any>;
  customerArray: [];
  showSuccessMessage: boolean;
  submitted: boolean;
  formGroup = new FormGroup({
    $key: new FormControl(null),
    FullName: new FormControl('', Validators.required),
    Mobile: new FormControl('', Validators.required),
    Message: new FormControl('', Validators.required),
    Location: new FormControl('', Validators.required)
  });
  ngOnInit() {
    this.GetCustomers();
    // this.GetCustomers().subscribe(list => {
    //   this.customerArray = list.map(item => {
    //     return {
    //       $key: item.key,
    //       ...item.payload.val()
    //     };
    //   });
    // });
  }

  GetCustomers() {
    this.customerList = this.firebase.list('customers');
    return this.customerList.snapshotChanges(); // make it observable
  }

  InsertCustomer(customer) {

    this.customerList.push({
      FullName: customer.FullName,
      Mobile: customer.Mobile,
      Location: customer.Location,
      Message: customer.Message
    });
  }

  onSubmit() {
    console.log(this.formGroup.value);
    this.submitted = true;
    if (this.formGroup.valid) {
      debugger;
      if (this.formGroup.get('$key').value === null) {
        this.InsertCustomer(this.formGroup.value);
        this.submitted = false;
        this.showSuccessMessage = true;
        setTimeout(() => {
          this.showSuccessMessage = false;
          this.formGroup.reset();
        }, 3000);
      }
    }
  }
}

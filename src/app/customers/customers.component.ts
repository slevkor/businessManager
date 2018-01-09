import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  public customers$: Observable<any>;
  constructor(private db: AngularFireDatabase) {
    this.customers$ = db.list('customers').valueChanges();
  }
  ngOnInit() {
  }

}

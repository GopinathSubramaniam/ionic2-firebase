import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  products :Array<any>;
  items: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController,  af: AngularFire) {
    this.products = [{id: 1, code: '01001', name: 'Prod 1'},{id: 2, code: '01002', name: 'Prod 2'},{id: 3, code: '01003', name: 'Prod 3'}];

    this.items = af.database.list('/items');
    console.log('items :::: ',this.items);
  }

}

import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  products :Array<any>;

  constructor(public navCtrl: NavController) {
    this.products = [{id: 1, code: '01001', name: 'Prod 1'},{id: 2, code: '01002', name: 'Prod 2'},{id: 3, code: '01003', name: 'Prod 3'}];

  }

}

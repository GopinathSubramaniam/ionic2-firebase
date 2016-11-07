import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

// import { Page1 } from '../pages/page1/page1';
// import { Page2 } from '../pages/page2/page2';

import { Register } from 'register/component/register';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Register;

  pages: Array<{title: string, component: any}>;
  
  constructor(public platform: Platform) {
    this.initializeApp();
    this.pages = [
      { title: 'Fruits Updated', component: '' },
      { title: 'Vegetables', component: '' }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

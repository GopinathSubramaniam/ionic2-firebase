import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { Observable } from 'rxjs/Rx';

import { Register } from 'register/component/register';

import {AppService} from './common/service/app-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Register;
  // categories = <any>[];
  pages = <any>[];
  
  constructor(public platform: Platform, public appService: AppService) {
    this.initializeApp();
   /*this.pages = [
      { title: 'Fruits Updated', component: '' },
      { title: 'Vegetables', component: '' }
    ];*/
  }

  initializeApp() {

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
    var that = this;
    /*this.appService.getCategories().then(function(resp:Array<any>){
      var arr = [];
      resp.forEach(function(item){
        console.log('Item ::: ', item);
        arr.push({ title: item.name, component: '' });
      });
      this.pages = arr;
      console.log('App Component Categories :: ', this.pages);
    });*/
    this.pages = this.appService.getCategories();
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

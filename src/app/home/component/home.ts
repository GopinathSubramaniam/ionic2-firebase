import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import {AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

// import {Page1} from '../../../pages/page1/page1'

@Component({
  selector: 'home',
  templateUrl: '../view/home.html'
})

export class Home{
  public currentUser: any = {};
  items: FirebaseListObservable<any[]>;

  constructor(public af : AngularFire, public navCtrl: NavController){
    this.doLogin();
  }

  doLogin(){
    var that = this;
    this.af.auth.login({email: 'gopiwrld@gmail.com', password:'1234567890'},{ provider: AuthProviders.Password, method: AuthMethods.Password}).then(function(response:any){
      console.log('response ::: ', response);
      that.currentUser = response.auth;
      debugger;
      // that.navCtrl.push(Page1);  Redirect to another page
      if(that.currentUser.displayName == '' || that.currentUser.displayName == null){
        
      }
    });
  }

  doRegister(){
    console.log('user obj :::: ', this.currentUser);
  }
}
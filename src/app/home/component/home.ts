import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
// import { Device } from 'ionic-native';

import {AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'home',
  templateUrl: '../view/home.html'
})

export class Home{
  
  public currentUser: any = {};
  items: FirebaseListObservable<any[]>;

  constructor(public af : AngularFire){
    this.doLogin();
  }

  doLogin(){
    var that = this;
    this.af.auth.login({email: 'gopiwrld@gmail.com', password:'1234567890'},{ provider: AuthProviders.Password, method: AuthMethods.Password}).then(function(response:any){
      console.log('response ::: ', response);
      debugger;
      that.currentUser = response.auth;
    });
  }

  doRegister(){
    console.log('user obj :::: ', this.currentUser);
  }
}
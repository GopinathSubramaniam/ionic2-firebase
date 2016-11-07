import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

import { RegisterService } from '../../register/service/register';
import { Home } from '../../home/component/home';
import {MyApp} from '../../app.component';

@Component({
  selector: 'register',
  templateUrl: '../view/register.html'
})

export class Register{
  public currentUser: any = {};
  items: FirebaseListObservable<any[]>;

  constructor(public af : AngularFire, 
              public navCtrl: NavController, 
              public registerService: RegisterService
              ){
    
  }

  ngAfterViewInit(){
    // this.doLogin();
    var that = this;
    this.registerService.doLogin().then(function(result){
      that.currentUser = result;
      if(that.currentUser){
         console.log('Current User ::::: ', that.currentUser);
        if(that.currentUser && that.currentUser.displayName){
          that.navCtrl.push(Home);
        }
      }
    });
  }

  doLogin(){
    /* var that = this;
    this.af.auth.login({email: 'gopiwrld@gmail.com', password:'1234567890'},{ provider: AuthProviders.Password, method: AuthMethods.Password}).then(function(response:any){
      console.log('response ::: ', response);
      that.currentUser = response.auth;
      if(that.currentUser){
        if(that.currentUser.displayName == '' || that.currentUser.displayName == null){
          var elem = document.getElementById('displayNameText');
          elem.classList.remove('hidden');
        }else{
          that.navCtrl.push(Home);
        }
      }
      // that.navCtrl.push(Page1);  Redirect to another page
    }).catch(function(error){
        var elem = document.getElementById('registerForm');
        elem.classList.remove('hidden');
        console.log('error ::::: ', error);
    });*/
  }

  doRegister(){
    console.log('user obj :::: ', this.currentUser);
  }
}
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

import { AppService } from '../../common/service/app-service';
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
  message = '';
  user = {};

  showLogin = false;
  showDisplayName = false;
  
  constructor(public af : AngularFire, 
              public navCtrl: NavController, 
              public appService: AppService,
              public registerService: RegisterService
              ){
    
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit : Register Page');
    var that = this;
    this.appService.storageGetItem('loggedInUser').then(function(loggedInUser:any){
        console.log('loggedInUser : ', loggedInUser);
        if(loggedInUser && loggedInUser.password){
          that.registerService.doLogin(loggedInUser.username, loggedInUser.password).then(function(result:any){
            if(result && result.email){
              if(result && result.displayName){
                that.navCtrl.push(Home);
              }else{
                that.showDisplayName = true;
                that.showLogin = false;
              }
            }else{
              that.showLogin = true;
              that.showDisplayName = false;
              that.message = result.message;
            }
          });
        }else{
          that.showLogin = true;
        }
    });
  }

  doLogin(){
    var that = this;
    this.registerService.doLogin(this.currentUser.username, this.currentUser.password).then(function(result:any){
      if(result && result.email){
        if(result && result.displayName){
          that.appService.storageSetItem('loggedInUser', that.currentUser);
          that.navCtrl.push(Home);
        }else{
          that.appService.storageSetItem('loggedInUser', that.currentUser);
          that.showLogin = false;
          that.showDisplayName = true;
        }
      }else{
        that.showLogin = true;
        that.showDisplayName = false;
        that.message = result.message;
      }
    });
  }

  doRegister(){
    console.log('user obj :::: ', this.currentUser);
  }
}
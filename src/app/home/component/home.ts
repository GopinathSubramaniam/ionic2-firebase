import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

import {AppService} from '../../common/service/app-service';

import {Challenge} from '../../challenge/component/challenge';

@Component({
    selector: 'home',
    templateUrl: '../view/home.html'
})

export class Home{
    @ViewChild(Nav) nav: Nav;
    rootPage: any = Challenge;

    categories = <any>[];

    constructor(public platform: Platform, public appService: AppService){
    //    this.categories = this.appService.getCategories(); 
    }

}
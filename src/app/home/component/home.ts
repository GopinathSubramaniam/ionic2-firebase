import { Component } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import {AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

import {AppService} from '../../common/service/app-service';

import {Challenge} from '../../challenge/component/challenge';

@Component({
    selector: 'home',
    templateUrl: '../view/home.html'
})

export class Home{
    rootPage: any = Challenge;

    constructor(public platform: Platform, public appService: AppService){ 
        
    }

}
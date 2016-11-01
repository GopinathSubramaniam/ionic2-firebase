import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class RegisterService{
    public currentUser: any = {};

    constructor(public af : AngularFire,){

    }

    doLogin(){
        var that = this;
        return new Promise(function(resolve, reject) {
            that.af.auth.login({email: 'gopiwrld@gmail.com', password:'1234567890'},{ provider: AuthProviders.Password, method: AuthMethods.Password}).then(function(response:any){
                console.log('response ::: ', response);
                var currentUser = response.auth;
                if(currentUser){
                    if(currentUser.displayName == '' || currentUser.displayName == null){
                        var elem = document.getElementById('displayNameText');
                        elem.classList.remove('hidden');
                    }
                }
                resolve(currentUser);
            }).catch(function(error:any){
                var elem = document.getElementById('registerForm');
                elem.classList.remove('hidden');
                console.log('error ::::: ', error);
                resolve(error);
            });
        });
    }

}
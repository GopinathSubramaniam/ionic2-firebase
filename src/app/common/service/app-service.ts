import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

import {AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class AppService{

    private categories:FirebaseListObservable<any[]>;
    private storage = new Storage();

    constructor(public af: AngularFire){
        console.log('Email :: ', this.storage.get('email'));
    }

    getCategories(){
        return this.af.database.list('/categories');
    }

    storageSetItem(param:any, value:any){
        console.log('storageSetItem ::: ');
        return this.storage.set(param, value);
    }

    storageGetItem(param:any){
        console.log('storageGetItem ::: ');
        var that = this;
        return new Promise(function(resolve, reject){
            that.storage.get(param).then(res=>{
                resolve(res);
            });
        })
    }

}
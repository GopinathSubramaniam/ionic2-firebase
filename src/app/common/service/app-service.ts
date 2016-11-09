import {Injectable} from '@angular/core';
import {AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class AppService{

   public categories:FirebaseListObservable<any[]>;

    constructor(public af: AngularFire){

    }

    getCategories(){
        var that = this;
        /*return new Promise(function(resolve, reject){
            that.af.database.list('/categories').subscribe(resp => {
                console.log('Categories :::: ', resp);  
                resolve(resp);
            });
        });*/
        return that.af.database.list('/categories');

    }

}
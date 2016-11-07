import {Injectable} from '@angular/core';
import {AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class AppService{

   public categories:FirebaseListObservable<any[]>;

    constructor(public af: AngularFire){

    }

    getCategories(){
         return this.categories = this.af.database.list('/categories');
    }

}
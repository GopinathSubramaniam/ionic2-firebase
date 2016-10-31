import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';

import { Home } from './home/component/home';

import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
    apiKey: 'AIzaSyAysE_spRpgOzdoV_1SwQdp-AguqzjlK5U',
   // authDomain: 'myapp-7c026.firebaseapp.com',
    authDomain: 'myapp-7c026.firebaseapp.com',
    databaseURL: 'https://myapp-7c026.firebaseio.com',
    storageBucket: 'myapp-7c026.appspot.com'
};


@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Home
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Home
  ],
  providers: [
    //FIREBASE_PROVIDERS,
    //defaultFirebase(firebaseConfig)
  ]
})
export class AppModule {}

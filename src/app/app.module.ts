import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

// Services
import { RegisterService } from './register/service/register';
import { AppService } from './common/service/app-service';

// Components
import { Register } from './register/component/register';
import { Home } from './home/component/home';
import { Challenge } from './challenge/component/challenge';

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
    Register,
    Home,
    Challenge
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Register,
    Home,
    Challenge
  ],
  providers: [
    AppService,
    RegisterService
  ]
})
export class AppModule {}

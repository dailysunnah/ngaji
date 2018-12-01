import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DoaPage } from '../pages/doa/doa';
import { DoaPagiPage } from '../pages/doa-pagi/doa-pagi';
import { DoaPetangPage } from '../pages/doa-petang/doa-petang';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DoaPage,
    DoaPagiPage,
    DoaPetangPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DoaPage,
    DoaPagiPage,
    DoaPetangPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

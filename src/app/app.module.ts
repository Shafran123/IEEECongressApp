import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//mport { AboutPage } from '../pages/about/about';
import { SchedulePage  } from '../pages/schedule/schedule';
import { SpeakerPage } from '../pages/speaker/speaker';
import { ContactPage } from '../pages/contact/contact';
import { MapPage } from '../pages/map/map';
//import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    SchedulePage,
    SpeakerPage,
    MapPage,
    ContactPage,
    
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SchedulePage,
    SpeakerPage,
    MapPage,
    ContactPage,
    
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

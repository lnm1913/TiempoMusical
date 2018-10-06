import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistroPage } from '../pages/registro/registro';
import { IniciarSesionPage } from '../pages/iniciar-sesion/iniciar-sesion';
import { PrograEstudioPage } from '../pages/progra-estudio/progra-estudio';
import { TimerComponent } from '../components/timer/timer';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IniciarSesionPage,
    RegistroPage,
    PrograEstudioPage,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IniciarSesionPage,
    RegistroPage,
    PrograEstudioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

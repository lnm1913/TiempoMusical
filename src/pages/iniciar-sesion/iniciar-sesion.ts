import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrograEstudioPage } from '../progra-estudio/progra-estudio';


@Component({
  selector: 'page-iniciar-sesion',
  templateUrl: 'iniciar-sesion.html',
})
export class IniciarSesionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IniciarSesionPage');
  }

   abrirestudiar(){
    this.navCtrl.push(PrograEstudioPage);
   }

}

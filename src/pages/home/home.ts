import { Component } from '@angular/core';
import { NavController, MenuController, NavParams, ModalController } from 'ionic-angular';
import { IniciarSesionPage } from '../iniciar-sesion/iniciar-sesion';
import { RegistroPage } from '../registro/registro';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  registro = RegistroPage;

  constructor(public navCtrl: NavController, 
    public modalCtrl: ModalController) {
  } 

  abririniciar() {
    const modal = this.modalCtrl.create(IniciarSesionPage);
    modal.present();
  }

  abriregistro(){
    this.navCtrl.push(RegistroPage);
  }

}

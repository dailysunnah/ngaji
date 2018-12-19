import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { DoaPagiPage } from '../doa-pagi/doa-pagi';
import { DoaPetangPage } from '../doa-petang/doa-petang';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public navParam: NavParams,
    public loadingController: LoadingController
  ) {
    const loader = loadingController.create({
      content:'Tunggu beberapa saat ...',
      duration:3000
    })
    loader.present()
  }
  gotoDoaPagiPage(){
    this.navCtrl.push(DoaPagiPage)
  }
  gotoDoaPetangPage(){
    this.navCtrl.push(DoaPetangPage)
  }
}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DoaPagiPage } from '../doa-pagi/doa-pagi';
import { DoaPetangPage } from '../doa-petang/doa-petang';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public navParam: NavParams  
  ) {

  }
  gotoDoaPagiPage(){
    this.navCtrl.push(DoaPagiPage)
  }
  gotoDoaPetangPage(){
    this.navCtrl.push(DoaPetangPage)
  }
}

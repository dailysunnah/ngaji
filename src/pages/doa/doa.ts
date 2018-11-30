import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DoaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doa',
  templateUrl: 'doa.html',
})
export class DoaPage {
  items: Array<{title: string, note: string, icon: string}>;
  icons:string[]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [
      {title:'Do-a Pagi',note:'Do-a Pagi Hari',icon:'0'},
      {title:'Do-a Sore',note:'Do-a Sore Hari',icon:'1'}
    ];
  }
  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DoaPage');
  }

}

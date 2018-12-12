import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular'
/**
 * Generated class for the DoaPagiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doa-pagi',
  templateUrl: 'doa-pagi.html',
})
export class DoaPagiPage {
  show_translate = false
  show_info = false

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastController: ToastController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoaPagiPage');
  }
itemTapped(event,item){}
showHint(){
  const toast = this.toastController.create({
    message:'Geser kanan atau kiri untuk navigasi',
    duration: 3000,
    position:'top'
  })
  toast.present()
}
showTranslate(){
  console.log('Show translate invoked')
  if(!this.show_translate){
    this.show_translate = true;
  }else{
    this.show_translate = false;
  }
}
showInfo(){
  if(!this.show_info){
    this.show_info = true;
  }else{
    this.show_info = false;
  }
}

}

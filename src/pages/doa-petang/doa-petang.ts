import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Content } from 'ionic-angular';

/**
 * Generated class for the DoaPetangPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doa-petang',
  templateUrl: 'doa-petang.html',
})
export class DoaPetangPage {
  @ViewChild(Content) pageTop:Content
  show_translate = false
  show_info = false
  arabic_text = "arabic-text"
  tap_count = 0
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastController: ToastController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoaPetangPage');
  }
  dblTap(){
    this.tap_count++
    setTimeout(()=>{
      if(this.tap_count>1){
        this.zoomIn()
        this.tap_count = 0
      }
    },250)
  }
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
  zoomIn(){
    switch(this.arabic_text){
      case 'arabic-text':
      this.arabic_text = 'arabic-text-bigger'
      break
      case 'arabic-text-bigger':
      this.arabic_text = 'arabic-text-biggest'
      break
      case 'arabic-text-biggest':
      this.arabic_text = 'arabic-text'
      break
    }    
  }
  zoomOut(){
    switch(this.arabic_text){
      case 'arabic-text':
      this.arabic_text = 'arabic-text-biggest'
      break
      case 'arabic-text-biggest':
      this.arabic_text = 'arabic-text-bigger'
      break
      case 'arabic-text-bigger':
      this.arabic_text = 'arabic-text'
      break
    }    
  }
  swipeevent(){
    console.log("swipe event invoked 1")
    this.pageTop.scrollToTop();
    console.log("swipe event invoked 2")
  }
}

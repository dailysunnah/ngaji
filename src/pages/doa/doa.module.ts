import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoaPage } from './doa';

@NgModule({
  declarations: [
    DoaPage,
  ],
  imports: [
    IonicPageModule.forChild(DoaPage),
  ],
})
export class DoaPageModule {}

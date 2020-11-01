import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudesComponent } from './solicitudes.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [SolicitudesComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class SolicitudesModule { }

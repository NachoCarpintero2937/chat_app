import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RegistrarsePageRoutingModule } from './registrarse-routing.module';
import { RegistrarsePage } from './registrarse.page';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarsePageRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [RegistrarsePage]
})
export class RegistrarsePageModule { }

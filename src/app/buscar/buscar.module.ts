import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarPageRoutingModule } from './buscar-routing.module';

import { BuscarPage } from './buscar.page';
import { HttpClientModule } from '@angular/common/http';
import { PerfilModule } from '../components/perfil/perfil.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    BuscarPageRoutingModule,
    HttpClientModule,
    PerfilModule
  ],
  declarations: [BuscarPage]
})
export class BuscarPageModule { }

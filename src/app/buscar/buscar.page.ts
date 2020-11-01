import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { PerfilComponent } from '../components/perfil/perfil.component';
import { ApiService } from '../service/api.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {

  constructor(
    private _fb: FormBuilder,
    private _apiSv: ApiService,
    private _modalCtrl: ModalController,
    private _authSv: AuthService
  ) { }
  form = this._fb.group({
    buscar: [],
  });

  resultados = [];
  ngOnInit() {
  }


  buscar(e) {
    this._apiSv.getBuscar({
      filtro: {
        usuario: e,
        usuario_id: this._authSv.getUser().id
      }
    }).then((resp: any) => {
      this.resultados = resp.datos;
    }).catch((error) => {

    });
  }
  cancel() {
    this.resultados = [];
  }
  async verUser(model) {
    if (await this._modalCtrl.getTop()) {
      this._modalCtrl.dismiss();
    }
    const modal = await this._modalCtrl.create({
      component: PerfilComponent,
      componentProps: { usuario: model }
    });
    modal.onDidDismiss().then(
      (respuesta: any) => {
        if (respuesta && respuesta.data) {
        }
      }
    );
    return await modal.present();
  }
}

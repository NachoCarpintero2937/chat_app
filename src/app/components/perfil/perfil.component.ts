import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/service/api.service';
import { AuthService } from 'src/app/service/auth.service';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {

  constructor(
    private _modalCtrl: ModalController,
    private _apiSv: ApiService,
    private _authSv: AuthService,
    private _toastSv: ToastService
  ) { }
  @Input('usuario') usuario: any;
  ngOnInit() {
    this.checkSolicitud();
  }
  solicitud_enviada: any;
  dismiss() {
    this._modalCtrl.dismiss();
  }
  checkSolicitud() {
    this._toastSv.present();
    this._apiSv.getCheckSolicitud({
      usuario_id: this._authSv.getUser().id,
      amigo_id: this.usuario.id
    }).then((resp: any) => {
      this.solicitud_enviada = resp.datos[0].descripcion;
      console.log(this.solicitud_enviada);
      this._toastSv.dismiss();
    }).catch((error: any) => {
      this._toastSv.dismiss();
    });
  }

  enviarSolicitud() {
    this._toastSv.present();
    this._apiSv.setAmigo({
      usuario_id: this._authSv.getUser().id,
      amigo_id: this.usuario.id
    }).then((resp) => {
      console.log(resp);
      this._toastSv.dismiss();
    }).catch((error: any) => {
      this._toastSv.dismiss();
    })
  }
}

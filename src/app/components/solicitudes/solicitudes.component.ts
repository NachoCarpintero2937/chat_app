import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/service/api.service';
import { AuthService } from 'src/app/service/auth.service';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.scss'],
})
export class SolicitudesComponent implements OnInit {

  constructor
    (
      private _apiSv: ApiService,
      private _toastSv: ToastService,
      private _authSv: AuthService,
      private _modalCtrl: ModalController
    ) { }
  solicitudes: any;

  ngOnInit() {
    this.getSolicitudes();
  }
  getSolicitudes() {
    this._toastSv.present();
    this._apiSv.getSolicitudes({
      usuario_id: this._authSv.getUser().id
    }).then((resp: any) => {
      this._toastSv.dismiss();
      this.solicitudes = resp.datos;
    }).catch((error: any) => {
      this._toastSv.dismiss();
    });
  }

  dismiss() {
    this._modalCtrl.dismiss();
  }

}

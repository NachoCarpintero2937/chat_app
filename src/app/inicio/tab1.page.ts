import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SolicitudesComponent } from '../components/solicitudes/solicitudes.component';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private _modalCtrl: ModalController,
    public _authSv: AuthService
  ) { }

  async solicitudes() {
    if (await this._modalCtrl.getTop()) {
      this._modalCtrl.dismiss();
    }
    const modal = await this._modalCtrl.create({
      component: SolicitudesComponent,
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

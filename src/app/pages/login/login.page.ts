import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/service/api.service';
import { AuthService } from 'src/app/service/auth.service';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private _fb: FormBuilder,
    private _navCtrl: NavController,
    private _apiSv: ApiService,
    private _authSv: AuthService,
    private _toastSv: ToastService
  ) { }

  form = this._fb.group({
    username: ['Jorge', Validators.required],
    password: ['1234', Validators.required],
  });

  ngOnInit() {
  }
  ionViewWillEnter() {
    if (this._authSv._isLoggedIn) {
      this._navCtrl.navigateRoot('/ingreso/tabs/inicio');
    } else {
      this._navCtrl.navigateRoot('/login');
    }

  }

  type_password: boolean = true;
  passwordTypeToggle() {
    this.type_password = !this.type_password;
  }

  submit() {
    this._toastSv.present();
    this._authSv.login({
      username: this.form.get('username').value,
      password: btoa(this.form.get('password').value)
    }).then((resp) => {
      this._toastSv.dismiss();
      if (typeof resp.datos[0].nombre != 'undefined') {
        // this._toastSv.presentToast("Bienvenido " + resp.datos[0].nombre);
      }
      if (this._authSv._isLoggedIn) {
        this._navCtrl.navigateRoot('/ingreso/tabs/inicio');
      }
    }).catch((error: any) => {
      this._toastSv.dismiss();
    })
  }

}

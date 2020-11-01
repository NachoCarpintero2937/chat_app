import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  constructor(
    private _fb: FormBuilder,
    private _apiSv: ApiService,
    private _toastSv: ToastService
  ) { }
  form = this._fb.group({
    nombre: [null, Validators.required],
    apellido: [null, Validators.required],
    email: [null, Validators.email],
    usuario: [null, Validators.required],
    password: [null, Validators.required],
  });
  ngOnInit() {
  }
  type_password: boolean = true;
  passwordTypeToggle() {
    this.type_password = !this.type_password;
  }
  submit() {
    this._toastSv.present();
    this._apiSv.setUser({
      nombre: this.form.get('nombre').value,
      apellido: this.form.get('apellido').value,
      email: this.form.get('email').value,
      usuario: this.form.get('usuario').value,
      password: btoa(this.form.get('password').value)
    }).then((resp: any) => {
      this._toastSv.dismiss();
      console.log(resp);
    }).catch((error: any) => {
      this._toastSv.dismiss();
      this._toastSv.presentError('Error al registrar el usuario');
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { catchError, tap } from 'rxjs/operators';
import { GlobalsService } from './globals.service';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _globalSrv: GlobalsService,
    private _http: HttpClient,
    private _navCtrl: NavController,
    private _toastSv: ToastService
  ) { }
  _isLoggedIn: boolean;

  canActivate() {
    const userState = this._isLoggedIn;
    if (userState) {
      return true;
    }
    this._navCtrl.navigateRoot('/login');
    return false;
  }

  login(model): Promise<any> {
    return this._http
      .post(
        this._globalSrv.API_URL + 'login',
        model
      ).pipe(tap(
        (data: any) => {
          if (data.datos[0]) {
            this.setUser(data.datos[0]);
            this.setIsLoggedIn(true);
          }
        }
      ),
        catchError((error) => {
          return error;
        })
      ).toPromise();
  }
  setIsLoggedIn(v: boolean) {
    this._isLoggedIn = v;
  }

  setUser(model) {
    localStorage.setItem('user', JSON.stringify(model));
  }
  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
  logout() {
    localStorage.removeItem('user');
    this._isLoggedIn = false;
    this._navCtrl.navigateForward(['/login']);
  }
}

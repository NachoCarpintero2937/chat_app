import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalsService } from './globals.service';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private _http: HttpClient,
    private _globalsSv: GlobalsService) { }

  private _postAction(model, action_name) {
    return this._http.post(
      this._globalsSv.API_URL + action_name,
      model
    ).toPromise();
  }


  setUser(model) {
    return this._postAction(model, 'setUsuario');
  }
  getBuscar(model) {
    return this._postAction(model, 'getSearchUser');
  }
  setAmigo(model) {
    return this._postAction(model, 'setAmigo');
  }
  getSolicitudes(model) {
    return this._postAction(model, 'getSolicitudes');
  }
  getCheckSolicitud(model) {
    return this._postAction(model, 'getCheckSolicitud');
  }
}

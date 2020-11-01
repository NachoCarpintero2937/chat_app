import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastService } from '../service/toast.service';

@Injectable()
export class HttpconfigInterceptor implements HttpInterceptor {

  constructor
    (
      private _router: Router,
      private _toastSv: ToastService
    ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            // cacheo de estado distinto de uno
            if (event && event.body && typeof event.body.status != 'undefined' && event.body.status != 1) {
              if (event && event.body && typeof event.body.info != 'undefined') {
                this._toastSv.presentToast(event.body.info)
              }
            } else if (event.body.status == 200 && event.body.code == 1) {
            }
          }
          return event;
        }
      ),
      catchError((error: HttpErrorResponse) => {
        switch (error.status) {
          case 500:
            this._toastSv.presentError("Error en el servidor (500)");

            throw "Error interno en el servidor (500)"
            break;
          case 401:
            if (error.error.code == 80) {
              this._toastSv.presentError(error.error.info);
            }
            throw "Error (401)";
            break;
          default:
            this._toastSv.presentError("Error intente nuevamente más tarde");
            throw "Error intente nuevamente más tarde";
            break;
        }
        return Observable.throw(error.statusText);
      }))
  }
}

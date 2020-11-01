import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  constructor() { }

  readonly API_URL = 'http://192.168.0.229/'
}

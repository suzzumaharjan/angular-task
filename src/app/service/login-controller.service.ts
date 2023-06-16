import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginControllerService {

  constructor() { }
  getControllerData(key:string)
  {
    return JSON.parse(localStorage.getItem(key) || '{}');
  }
  setControllerData(key:string,value:any)
  {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
}

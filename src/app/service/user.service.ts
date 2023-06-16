import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService { 
  constructor() { }
  getUser(key:string)
  {
    return JSON.parse(localStorage.getItem(key) || '{}');
  }
  setUser(key:string,value:any)
  {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
}

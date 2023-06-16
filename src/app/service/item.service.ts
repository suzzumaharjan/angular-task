import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }
  getItems(key:string)
  {
    return JSON.parse(localStorage.getItem(key) || '{}');
  }
  setItems(key:string,value:any)
  {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

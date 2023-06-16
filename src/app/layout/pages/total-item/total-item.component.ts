import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item.model';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-total-item',
  templateUrl: './total-item.component.html',
  styleUrls: ['./total-item.component.css']
})
export class TotalItemComponent implements OnInit {
  Items:Item[]=[];
  Item:Item[]=[];
  ItemList:Array<Item>=([
    {id:1,item_name:'English-book',quantity:3,rate:5,total:5000},
    {id:2,item_name:'watch',quantity:2,rate:3,total:9000},
    {id:3,item_name:'English-book',quantity:3,rate:6,total:5000},
    {id:4,item_name:'English-book',quantity:3,rate:9,total:5000}
    
  ])
  constructor(private itemservice:ItemService) { }

  ngOnInit(): void {
    
    this.ItemInfo();
    
  }
  ItemInfo()
  {
    this.Items=this.itemservice.getItems("ItemData");
    this.itemservice.setItems("ItemData",this.ItemList);
   }

  
}

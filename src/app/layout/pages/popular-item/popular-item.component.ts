import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item.model';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-popular-item',
  templateUrl: './popular-item.component.html',
  styleUrls: ['./popular-item.component.css']
})
export class PopularItemComponent implements OnInit {
Items:Item[]=[];
Item:Item[]=[];
  constructor(private itemservice:ItemService) { }

  ngOnInit(): void {
    
    this.popularItem();
    
  }
  popularItem()
  {
    let num=5;
   
    if(this.Items=this.itemservice.getItems("ItemData"))
    {
      for(var i=0;i<this.Items.length;i++)
      {
        var rates=this.Items[i].rate;
        if(rates>=num)
        {
          this.Item=this.Item.concat(this.Items[i]);
          console.log(this.Item);
        }
       
                
      }
      
     
    }  
    
 }
 
}

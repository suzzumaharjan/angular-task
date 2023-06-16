import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  Users:User[]=[];
  UserList:Array<User>=([
    {id:'1',full_name:'suja maharjan',address:'panga',contact_number:'9813528775',email:'suja@gmail.com'},
    {id:'2',full_name:'rashila maharjan',address:'panga',contact_number:'9813528775',email:'rashila@gmail.com'},
    {id:'3',full_name:'samira maharjan',address:'panga',contact_number:'9813528775',email:'samira@gmail.com'},
    {id:'4',full_name:'ashesh maharjan',address:'panga',contact_number:'9813528775',email:'ashesh@gmail.com'},
  ])
  
  constructor(private userservice:UserService) { 
    this.Users=[];
  }

  ngOnInit(): void {
   this.UserInfo();
  }
  UserInfo()
   {
    this.Users=this.userservice.getUser("UserData");
    this.userservice.setUser("UserData",this.UserList);
  }

}

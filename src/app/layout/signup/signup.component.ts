import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginController } from 'src/app/model/loginController.model';
import { User } from 'src/app/model/user.model';
import { LoginControllerService } from 'src/app/service/login-controller.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  loginData!:FormGroup;
  Controllers:LoginController[]=[];
  UserList:Array<LoginController>= ([  
    { username:'suja', roles:'admin' },  
    { username:'rashila', roles:'admin' }
  ])
  constructor(private loginController:LoginControllerService) {
   }

  ngOnInit(): void { 
    this.loginController.setControllerData("key",this.UserList);
    this.loginData=new FormGroup({
      username:new FormControl(''),
      roles:new FormControl(''),
    });
    
    this.displayUser();
  }
  
  onlogin()
  {
       
    if (this.Controllers=this.loginController.getControllerData("key")) {
      let found=false;
      for(var i=0;i<this.Controllers.length;i++)
      {
        // console.log(this.Users[i].username);
        if (this.loginData.value.username== this.Controllers[i].username) {
          found=true;
          break;
        }
      }
      found ? console.log("login successfull"):console.log("login failed");
    }  
  }
 
  displayUser()
  {
    this.Controllers=this.loginController.getControllerData("key")
    // console.log(this.Users[0].username);
  }

}

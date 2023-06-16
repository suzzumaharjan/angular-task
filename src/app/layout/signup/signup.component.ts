import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
    { username:'suja',password:"helloworld", roles:'admin' },  
    { username:'rashila',password:"helloworld", roles:'admin' },
    { username:'samira',password:"helloworld", roles:'supervisior' }

  ])
  constructor(private loginController:LoginControllerService,private router:Router) {
   }

  ngOnInit(): void { 
    history.pushState(null, '');
    this.loginController.setControllerData("key",this.UserList);
    this.loginData=new FormGroup({
      username:new FormControl(''),
      password:new FormControl(''),
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
        if (this.loginData.value.username== this.Controllers[i].username && this.loginData.value.password==this.Controllers[i].password) {
          var role=this.Controllers[i].roles;
          found=true;
          break;
        }
      }
      if(found)
      {
        if(role==='admin' || role==='supervisior')
        {
          alert("admin");
          this.router.navigate(['/dashboard'])
        }
        else{
          this.router.navigate([''])
        }
      }
      else{
        alert("Data found failed!!!");
        window.location.reload();
        
      }
      // found ? console.log("login successfull"):console.log("login failed");
    }  
  }
 
  displayUser()
  {
    this.Controllers=this.loginController.getControllerData("key")
    // console.log(this.Users[0].username);
  }

}

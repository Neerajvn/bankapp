import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder ) { }

  ngOnInit(): void {
  }

  acno=""
  pswd=""

  loginForm = this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  })


  
 //authenticate using event binding using $event as argument

login(){
  
  var acno=this.loginForm.value.acno
  var pswd=this.loginForm.value.pswd 

  
  
   

   if(this.loginForm.valid){
    const result=this.ds.login(acno,pswd)
    if(result){
      alert("login successful")
      this.router.navigateByUrl("dashboard")
    }
    
   }
   else{
    alert("invalid account Number or Password")
  }
  

}

get_acno(event :any){
  console.log(event.target.value);
  this.acno=event.target.value
  
}
get_pswd(event :any){
  console.log(event.target.value);
  this.pswd=event.target.value

}

//authenticate using template reference variable
// login(a:any,p:any){
//   console.log();
  
//   var acno=a.value
//   var pswd=p.value
//   let db= this.database
//   if(acno in db){
//     if(pswd==db[acno]["password"]){
//       alert("login successful")
//     }
//     else{
//       alert("password incorrect")
//     }
//   }
//   else{
//     alert("account number doesnot exist")
//   }


// }


}

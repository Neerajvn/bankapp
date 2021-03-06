import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  acno=""
  pswd=""
  amount=""

  acno1=""
  pswd1=""
  amount1=""
  


  depositeForm = this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]],

  })

  withdrawForm = this.fb.group({
    acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd1:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount1:['',[Validators.required,Validators.pattern('[0-9]*')]],

  })
user=''
  constructor(private ds:DataService, private fb:FormBuilder) { 
    this.user = ds.currentUname
  }

  ngOnInit(): void {
  }
deposite(){
  var acno=this.depositeForm.value.acno
  var pswd=this.depositeForm.value.pswd
  var amount=this.depositeForm.value.amount
  if(this.depositeForm.valid){
    const result = this.ds.deposite(acno,pswd,amount)
 if (result){
  alert(amount+"Rs deposited successfully ")
  alert("New Balance is"+result)

} 
  }
  else{
    alert("invalid form")
  }   
  
}

withdraw(){
  var acno=this.withdrawForm.value.acno1
  var pswd=this.withdrawForm.value.pswd1
  var amount=this.withdrawForm.value.amount1

  if(this.withdrawForm.valid){
    const result = this.ds.withdraw(acno,pswd,amount)
    if (result){
      alert(amount+"Rs Withdraw successfully ")
      alert("New Balance is"+result)
    
    }
    
  }
  else{
    alert("invalid form")
  } 

  
}

}


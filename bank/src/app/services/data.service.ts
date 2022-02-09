import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUname=''

  database:any={
    1000:{acno:1000,uname:"Neer",password:"1000",balance:5000},
    1001:{acno:1001,uname:"Akhil",password:"1001",balance:5000},
    1002:{acno:1002,uname:"Raju",password:"1002",balance:5000}
  }

  constructor() { 
    this.getDetails()
  }

  //store to localstorage

  saveDetails(){
    if(this.database){
      localStorage.setItem("database",JSON.stringify(this.database))
    }
    if(this.currentUname){
      localStorage.setItem("currentUname",JSON.stringify(this.currentUname))
    }
  }

  // get detils to localstorage
  getDetails(){
    if(localStorage.getItem("database")){
      this.database=JSON.parse(localStorage.getItem("database") ||" ")
    }
    if(localStorage.getItem("currentUname")){
      this.currentUname=JSON.parse(localStorage.getItem("currentUname") ||" ")
    }
  }








// for register
register(acno:any,uname:any,password:any){

  let db=this.database
  if(acno in db){
    
    return false
  }
  else{
    db[acno]={
      acno,
      uname,
      password,
      balance:"0"
    }
    console.log(db);
    this.saveDetails()
    
    
    return true
  }
  
}


// for login
login(acno:any,pswd:any){
  

  let db= this.database
  if(acno in db){
    if(pswd==db[acno]["password"]){
    this.currentUname= db[acno]["uname"]
    this.saveDetails()
     return true
      
    }
    else{
      return false
    }
  }
  else{
    return false
  }
  
}

// deposite
deposite(acno:any,password:any,amt:any){

  var amount=parseInt(amt)
  let db=this.database

  if (acno in db){
    if(password == db[acno]["password"] ){
      db[acno]["balance"]+=amount
      this.saveDetails()
      return db[acno]["balance"]
    }
    else{
      alert("invalid password")
      return false
    }
  }
  else{
    alert("invalid account number")

  return false
  }

}

//withdraw
withdraw(acno:any,password:any,amt:any){

  var amount=parseInt(amt)
  let db=this.database

  if (acno in db){
    if(password == db[acno]["password"] ){
      if (db[acno]["balance"]>amount){
        db[acno]["balance"]-=amount
        this.saveDetails()

      return db[acno]["balance"]
      }
      else{
        alert("Insufficient Balance")
      }
      
    }
    else{
      alert("invalid password")
      return false
    }
  }
  else{
    alert("invalid account number")

  return false
  }

}

}





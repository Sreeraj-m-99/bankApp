import { Component } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  acno=""
  psw=""
  amnt=""

  acno1=""
  psw1=""
  amnt1=""
  user=""

  constructor(private ds:DataService){
    // acess user name
   this. user=this.ds.currentuser
  }
  ngOnInit():void{

  }

  deposit(){
    var acno=this.acno
    var psw=this.psw
    var amnt=this.amnt
    const result=this.ds.deposit(acno,psw,amnt)
    if(result){
      alert(`${amnt} credicted to your account and balance is ${result}`)
    }
    else{
      alert("incorrect account number or password")
    }

  }
  withdraw(){

    var acno1=this.acno1
    var psw1=this.psw1
    var amnt1=this.amnt1

    const result=this.ds.withdraw(acno1,psw1,amnt1)
    if(result){
      alert(`${amnt1} is debited and balance is${result}` )
    }


  }

}

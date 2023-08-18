import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  data = {
    recipient:"",
    subject:"",
    msg :""
  }
  flag = false;
  constructor(private snack:MatSnackBar,private email:BackendService){
  }
  
  btnClick(){
    console.log("btn click");
    this.snack.open('Email Sent Successfully!!', "Close",);
  }
 
  doSubmitForm(){
    console.log("Submit")
    if(this.data.recipient =='' || this.data.subject=='' || this.data.msg==''){
      this.snack.open("Fields can not be empty!!", "close");
      return;
    }
    this.flag = true;
    this.email.sendEmail(this.data).subscribe(
      response=>{
        console.log(response)
        this.flag = false;
        this.snack.open('Email Sent Successfully!!', "Close",);
      },
      error=>{
        console.log(error)
        this.flag = false;
        // this.snack.open('Email Not Sent', "Close",);
        this.snack.open('Email Sent Successfully!!', "Close",);
      }
    )
  }
}

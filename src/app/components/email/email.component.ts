import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  constructor(private snack:MatSnackBar){
  }
  btnClick(){
    console.log("btn click");
    this.snack.open('Email Send Successfully!!', "Close",);
  }
}

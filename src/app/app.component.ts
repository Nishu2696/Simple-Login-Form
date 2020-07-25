import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  login : FormGroup
  constructor(
    private fb: FormBuilder
  ){
    this.login = new FormGroup(
      {
        "email": new FormControl("", [Validators.required, Validators.email]), 
        "password": new FormControl("", Validators.required)
      }
    );
  }
  sendvalues(){
    console.log(this.login.value);
  }
}

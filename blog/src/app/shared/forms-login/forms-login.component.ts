import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-login',
  templateUrl: './forms-login.component.html',
  styleUrls: ['./forms-login.component.scss']
})
export class FormsLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public submitForm(form: NgForm){
    console.log(form.value);
  }

}

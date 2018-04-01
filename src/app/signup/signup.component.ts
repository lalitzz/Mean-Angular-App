import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @ViewChild('f') signup: NgForm;
  genders = ['male', 'female'];
  user = {
    fname: '',
    lname: '',
    email: '',
    password: '',
    gender: ''
  };
  submitted = false;

  constructor() { }

  ngOnInit() {
    
  }

  formSubmit(){
    this.submitted = true;
    this.user.fname = this.signup.form.value.fname;
    this.user.lname = this.signup.form.value.lname;
    this.user.email = this.signup.form.value.email;
    this.user.password = this.signup.form.value.pswd;
    this.user.gender = this.signup.form.value.gender;
    console.log(this.user);
    console.log(this.signup);
    this.signup.reset();
  }

}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signupForm: FormGroup;
  forbiddenUsernames = ['Vishnu', 'Senthil'];
  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      'fname': new FormControl(null, [Validators.required], this.forbiddenFname),
      'password': new FormControl(null, [Validators.required])
    });
    // this.signupForm = new FormGroup({
      
    //     'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
    //     'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
    //     'password': new FormControl(null)
    // });
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  // forbiddenFnam(control: FormControl): Promise<any> | Observable<any> {
  //   const promise = new Promise<any>((resolve, reject) => {
  //     setTimeout(() => {
  //       if (control.value === 'test@test.com') {
  //         resolve({'emailIsForbidden': true});
  //       } else {
  //         resolve(null);
  //       }
  //     }, 1500);
  //   });
  //   return promise;
  // }

  forbiddenFname(control: FormControl): Promise<any> | Observable<any>{
    return new Promise<any>((resolve, reject) => {
      setTimeout(function(){
        if(control.value === 'foo'){
          resolve({'fnameIsForbidden': true});
        }
        resolve(null);
      }, 5000);
    });

   
  }

}

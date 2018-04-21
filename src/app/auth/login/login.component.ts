import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signupForm: FormGroup;
  forbiddenUsernames = ['Vishnu', 'Senthil'];
  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      'password': new FormControl(null, [Validators.required])
    });
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

  onSubmit() {
    console.log("Hello", this.signupForm.value.userData.email, this.signupForm.value.password); 
    this.auth.login(this.signupForm.value.userData.email, this.signupForm.value.password);  
    if(this.auth.isAuthenticated) {
      this.router.navigate(['/tweet', 'show']);
    }
  }

}

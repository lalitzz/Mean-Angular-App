import {Component,Injectable,OnInit, OnDestroy,Input,Output,EventEmitter} from '@angular/core'
import { CredentialService } from './credential.service';

@Injectable()
export class AuthService {
  @Output() loginEvent: EventEmitter<any> = new EventEmitter();
    loggedIn = false;
    constructor(private credential: CredentialService){}
    isAuthenticated() {
      const promise = new Promise(
        (resolve, reject) => {
          setTimeout(() => {
            resolve(this.loggedIn);
          }, 800);
        }
      );
      return promise;
    }
  
    login(email:string, password: string) {
      this.credential.validateUser(email, password).then((data) => {
        if(data['status'] == 200){
          this.loggedIn = true;
          this.loginEvent.emit(this.loggedIn)
        }
      }).catch((error) => {
        console.log("error"+error);
      });
    }
  
    logout() {
      this.loggedIn = false;
      this.loginEvent.emit(this.loggedIn);
    }

    getAuthStatus(){
      return this.loginEvent;
    }

  }
  
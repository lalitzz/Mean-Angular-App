import {Component,Injectable,OnInit, OnDestroy,Input,Output,EventEmitter} from '@angular/core'

export class AuthService {
  @Output() loginEvent: EventEmitter<any> = new EventEmitter();
    loggedIn = false;
  
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
  
    login() {
      this.loggedIn = true;
      this.loginEvent.emit(this.loggedIn);
    }
  
    logout() {
      this.loggedIn = false;
      this.loginEvent.emit(this.loggedIn);
    }

    getAuthStatus(){
      return this.loginEvent;
    }

  }
  
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthRoutingModule } from './auth.routing.module';

@NgModule({
    declarations: [
      LoginComponent,
      SignupComponent
    ],
    imports: [
      FormsModule,
      AuthRoutingModule,
      ReactiveFormsModule,
      CommonModule
    ]
  })

export class AuthModule {}

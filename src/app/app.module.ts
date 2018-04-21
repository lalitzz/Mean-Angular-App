import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { DummyComponent } from './dummy/dummy.component';

import { BasicHighlightDirective } from './directives/basichighlight.directive';
import { BetterHighlightDirective } from './directives/better/betterhighlight.directive';
import { UnlessDirective } from './directives/unless/unless.directive';
import { TweetService } from './services/tweet.service';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './modules/app.routing.module';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './services/auth.service';
import { CredentialService } from './services/credential.service';
import { SkillsComponent } from './skills/skills.component';

import { AuthModule } from './auth/auth.module';

import { TweetModule } from './tweet/tweet.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainComponent,
    DummyComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AuthModule,
    TweetModule
  ],
  providers: [TweetService, AuthGuard, AuthService, CredentialService],
  bootstrap: [AppComponent]
})
export class AppModule { }

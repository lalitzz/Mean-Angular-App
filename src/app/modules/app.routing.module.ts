import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TweetService } from './../services/tweet.service';
import { TweetComponent } from './../tweet/tweet.component';
import { ShowComponent } from './../tweet/show/show.component';
import { CreateComponent } from './../tweet/create/create.component';
import { EditComponent } from './../tweet/edit/edit.component';
import { AuthGuard } from './../auth-guard.service';

import { MainComponent } from './../main/main.component';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
    {path: 'tweet', canActivateChild: [AuthGuard], component: TweetComponent, children: [
      { path: 'show', component: ShowComponent },
      { path: 'create', component: CreateComponent },
      { path: 'edit/:id', component: EditComponent }
    ]  },
    { path:'signup', component: SignupComponent},
    { path:'login', component: LoginComponent},
    {path: '', component: MainComponent },
    { path: '**', redirectTo: '/' }
  ];

@NgModule({
imports: [
    // RouterModule.forRoot(appRoutes, {useHash : true})
    RouterModule.forRoot(routes)
],
exports: [RouterModule]
})
export class AppRoutingModule {

}
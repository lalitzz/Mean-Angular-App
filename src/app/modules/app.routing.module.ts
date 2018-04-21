import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TweetService } from './../services/tweet.service';
import { AuthGuard } from './../auth-guard.service';

import { MainComponent } from './../main/main.component';
import { SkillsComponent } from '../skills/skills.component';

const routes: Routes = [
    { path:'skill', component: SkillsComponent },
    {path: '', component: MainComponent }
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
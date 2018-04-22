import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TweetService } from './../services/tweet.service';
import { AuthGuard } from './../auth-guard.service';

import { MainComponent } from './../main/main.component';
import { ProfileModule } from './../profile/profile.module';

const routes: Routes = [
    {path: 'profile', loadChildren: './../profile/profile.module#ProfileModule'},
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
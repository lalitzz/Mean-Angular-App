import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TweetComponent } from './tweet.component';
import { ShowComponent } from './show/show.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';


const tweetRoute: Routes = [
    {path: 'tweet', component: TweetComponent, children: [
        { path: 'show', component: ShowComponent },
        { path: 'create', component: CreateComponent },
        { path: 'edit/:id', component: EditComponent }
      ]  
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(tweetRoute)
    ],
    exports: [RouterModule]
})

export class TweetRoutingModule {}
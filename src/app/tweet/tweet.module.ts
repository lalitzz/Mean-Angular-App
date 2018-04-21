import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  

import { TweetComponent } from './tweet.component';
import { ShowComponent } from './show/show.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

import { TweetRoutingModule } from './tweet-routing.module';

@NgModule({
    declarations: [
        TweetComponent,
        ShowComponent,
        CreateComponent,
        EditComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        TweetRoutingModule
    ],
    exports: [],
    providers: []
})

export class TweetModule {}
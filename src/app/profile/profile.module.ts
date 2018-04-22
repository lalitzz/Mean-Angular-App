import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  

import { ProfileRoutingModule } from './profile-routing.module';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile.component';

@NgModule({
    declarations: [
      SkillsComponent,
      AboutComponent,
      ProfileComponent
    ],
    imports: [
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      ProfileRoutingModule
    ]
  })

export class ProfileModule {}

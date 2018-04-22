import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile.component';

const profileRoutes: Routes = [
    {path: '', component: ProfileComponent, children: [
        {path:'skills', component: SkillsComponent},
        {path:'about', component: AboutComponent}
    ]}
]
@NgModule({
    imports: [
      RouterModule.forChild(profileRoutes)
    ],
    exports: [
        RouterModule
    ]
  })

export class ProfileRoutingModule {}

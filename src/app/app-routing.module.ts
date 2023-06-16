import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { TeamProjectComponent } from "./modulePages/team-project/team-project.component";

const routes: Routes = [
  {
    component:HomepageComponent,
    path:''
  },
  {
    component:TeamProjectComponent,
    path:'team-project'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeMessageComponent } from './homepage/welcome-message/welcome-message.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { TechSkillsComponent } from './homepage/tech-skills/tech-skills.component';
import { EducationComponent } from './homepage/education/education.component';
import { ProjectsComponent } from './homepage/projects/projects.component';
import { TeamProjectComponent } from './modulePages/team-project/team-project.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeMessageComponent,
    HomepageComponent,
    FooterComponent,
    TechSkillsComponent,
    EducationComponent,
    ProjectsComponent,
    TeamProjectComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

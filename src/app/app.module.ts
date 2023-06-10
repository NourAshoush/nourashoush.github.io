import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeMessageComponent } from './homepage/welcome-message/welcome-message.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { TechSkillsComponent } from './homepage/tech-skills/tech-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeMessageComponent,
    HomepageComponent,
    FooterComponent,
    TechSkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

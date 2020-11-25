import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { FrameworkModule } from './framework/framework.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeFlashShowDirective } from './home/home-flash-show.directive';
import { AboutComponent } from './about/about.component';
import { SkillBarComponent } from './skill-bar/skill-bar.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlurbComponent } from './blurb/blurb.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeFlashShowDirective,
    AboutComponent,
    SkillBarComponent,
    ProjectsComponent,
    BlurbComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FrameworkModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

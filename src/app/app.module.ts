import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { FrameworkModule } from './framework/framework.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeFlashShowDirective } from './home/home-flash-show.directive';
import { AboutComponent } from './about/about.component';
import { SkillBarComponent } from './skill-bar/skill-bar.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlurbComponent } from './blurb/blurb.component';

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
    HttpModule,
    FrameworkModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent, pathMatch: 'full'
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'projects',
        component : ProjectsComponent
      }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
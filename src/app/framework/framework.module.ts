import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteLogoComponent } from './site-logo/site-logo.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { RouterModule } from '@angular/router';
import { BasePageComponent } from './base-page/base-page.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollupDirective } from './scrollup.directive';
import { WINDOWREF, WindowRef } from './windowRef';
import { ScrollupService } from './scrollup.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  declarations: [SiteLogoComponent, NavigationBarComponent, BasePageComponent, FooterComponent, ScrollupDirective],
  exports : [NavigationBarComponent, SiteLogoComponent, BasePageComponent],
  providers : [
    { provide: WINDOWREF, useClass: WindowRef},
    ScrollupService,
  ],
})
export class FrameworkModule { }

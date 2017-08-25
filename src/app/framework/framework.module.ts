import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteLogoComponent } from './site-logo/site-logo.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { RouterModule } from '@angular/router';
import { BasePageComponent } from './base-page/base-page.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollupDirective } from './scrollup.directive';
import { WINDOWREF, WindowRef } from './WindowRef';
import { ScrollupService } from './scrollup.service';


@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SiteLogoComponent, NavigationBarComponent, BasePageComponent, FooterComponent, ScrollupDirective],
  exports : [NavigationBarComponent, SiteLogoComponent, BasePageComponent],
  providers : [
    { provide: WINDOWREF, useClass: WindowRef},
    ScrollupService,
  ],
})
export class FrameworkModule { }

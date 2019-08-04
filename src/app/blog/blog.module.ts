import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { BlogRoutingModule } from './blog-routing.module';
import { MainComponent } from './main/main.component';
import { FrameworkModule } from 'app/framework/framework.module';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    MainComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FrameworkModule,
    MarkdownModule.forRoot()
  ]
})
export class BlogModule { }

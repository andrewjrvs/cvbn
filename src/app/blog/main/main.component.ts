import { Component, OnInit } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private markdownService: MarkdownService) { }

  public test() {
    console.log('testing clicked');
  }

  ngOnInit() {
    // TODO: I need to get this to use use the Angular Router...
    // this.markdownService.renderer.link = (href: string, title: string, text: string) => {
    //   return `
    //     <a routerLink="${href}" (click)="test()" href="${href}" routerLinkActive="active" title="${title}">${text}</a>`;
    // };
  }

}

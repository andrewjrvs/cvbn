import { Component, OnInit, ViewChild, Renderer2, OnDestroy } from '@angular/core';
import { MarkdownService, MarkdownComponent } from 'ngx-markdown';
import { Router } from '@angular/router';

const isAbsolute = new RegExp('(?:^[a-z][a-z0-9+.-]*:|\/\/)', 'i');

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  private listenObj: any;

  @ViewChild('postDiv', {static: false})
  private postDiv: MarkdownComponent;

  constructor(private markdownService: MarkdownService, private renderer: Renderer2, private router: Router,) { }

  public onMarkdownLoad() {
    // because MarkdownComponent isn't 'compiled' the links don't use the angular router,
    // so I'll catch the link click events here and pass them to the router...
    if (this.postDiv) {
      this.listenObj = this.renderer.listen(this.postDiv.element.nativeElement, 'click', (e: Event) => {
        if (e.target && (e.target as any).tagName === 'A') {
          const el = (e.target as HTMLElement);
          const linkURL = el.getAttribute && el.getAttribute('href');
          if (linkURL && !isAbsolute.test(linkURL)) {
            e.preventDefault();
            this.router.navigate([linkURL]);
          }
        }
      });
    }
  }

  ngOnInit() {  }

  ngOnDestroy(): void {
    if (this.listenObj) {
      this.listenObj();
    }
  }

}

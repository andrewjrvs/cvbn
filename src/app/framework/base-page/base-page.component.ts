import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.scss']
})
export class BasePageComponent implements OnInit {

  @Input()
  public showFooter = false;

  constructor() { }

  ngOnInit() {
  }

}

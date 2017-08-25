import { Component, OnInit, Input, HostBinding } from '@angular/core';

import { Project } from '../project';

@Component({
  selector: 'app-blurb',
  templateUrl: './blurb.component.html',
  styleUrls: ['./blurb.component.scss']
})
export class BlurbComponent implements OnInit {
  @HostBinding('class.project-overview')
  classProjectOverview = true;

  @Input()
  public project: Project = null;

  constructor() { }

  ngOnInit() {
  }

}

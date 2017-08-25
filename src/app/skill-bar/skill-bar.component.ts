import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.scss']
})
export class SkillBarComponent implements OnInit {
  @HostBinding('class.row') classRow = true;

  @Input()
  public value: number = null;

  constructor() { }

  ngOnInit() {
  }

}

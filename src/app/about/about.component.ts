import { Component, OnInit, HostBinding } from '@angular/core';
import { PersonalInformationService } from '../personal-information.service';
import { Skill } from '../skill';
import { slideInDownAnimation } from '../animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [PersonalInformationService],
  animations: [ slideInDownAnimation ]
})
export class AboutComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  mySkills: Skill[];

  constructor(private personalInformationService: PersonalInformationService) { }

  getMySkills(): void {
    this.personalInformationService.getSkills().then(skills => this.mySkills = skills);
  }

  ngOnInit(): void {
    this.getMySkills();
  }

}

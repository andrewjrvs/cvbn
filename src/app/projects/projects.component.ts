import { Component, OnInit, HostBinding } from '@angular/core';
import { PersonalInformationService } from '../personal-information.service';
import { Project } from '../project';
import { slideInDownAnimation } from '../animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [PersonalInformationService],
  animations: [ slideInDownAnimation ]
})
export class ProjectsComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  public projects: Project[];

  constructor(private personalInformationService: PersonalInformationService) {}

  getMyProjects(): void {
      this.personalInformationService.getProjects().then(data => this.projects = data);
  }

  ngOnInit(): void {
      this.getMyProjects();
  }

}

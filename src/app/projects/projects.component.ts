import { Component, OnInit, HostBinding } from '@angular/core';
import { PersonalInformationService } from '../personal-information.service';
import { Project } from '../project';
import { slideInDownAnimation } from '../animations';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';

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

  public projects$: Observable<Project[]>;

  constructor(private _pInfoSrv: PersonalInformationService) {
    this.projects$ = this._pInfoSrv.projects$.share();
  }

  ngOnInit(): void { }

}

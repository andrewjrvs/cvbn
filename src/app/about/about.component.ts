import { Component, OnInit, HostBinding } from '@angular/core';
import { PersonalInformationService } from '../personal-information.service';
import { Skill } from '../skill';
import { slideInDownAnimation } from '../animations';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


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

  public faHeart = faHeart;

  public skills$: Observable<Skill[]>;

  constructor(private _pInfoSrv: PersonalInformationService) {
    this.skills$ = this._pInfoSrv.skills$.pipe(share());
  }

  ngOnInit(): void { }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHome
        , faMale
        , faCogs
        , faChalkboard
        , faArrowUp  } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  faHome = faHome;
  faMale = faMale;
  faCogs = faCogs;
  faChalkboard = faChalkboard;
  faArrowUp = faArrowUp;
  faLinkedin = faLinkedin;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoPage(name: String): void {
    this.router.navigate(['/' + name]);
  }
}

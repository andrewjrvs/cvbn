import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Skill} from './skill';
import {Project} from './project';
import {PROJECTS} from './mock-projects';

@Injectable()
export class PersonalInformationService {
  private skillsURL = 'assets/myskills.json';

  constructor(private http: Http) { }

  getSkills(): Promise<Skill[]> {
      return this.http.get(this.skillsURL)
          .toPromise()
          .then(response => response.json() as Skill[])
          .catch(this.handleError);
  }

  getProjects(): Promise<Project[]> {
      return Promise.resolve(PROJECTS);
  }

  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
  }

}

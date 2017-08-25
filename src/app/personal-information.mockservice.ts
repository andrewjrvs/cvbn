import 'rxjs/add/operator/toPromise';

import {Skill} from './skill';
import {Project} from './project';
import {PROJECTS} from './mock-projects';

const mockSkills: Skill[] = [{
    label: 'TEST!'
    , sub: 'subtest'
    , ability: 2
} as Skill,
{
    label: 'TEST2!'
    , sub: 'subtest2'
    , ability: 3
} as Skill];

export class MockPersonalInformationService {
    getSkills(): Promise<Skill[]> {
      return Promise.resolve(mockSkills);
  }

  getProjects(): Promise<Project[]> {
      return Promise.resolve(PROJECTS);
  }
}

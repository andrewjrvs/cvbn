import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

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
    public get skills$(): Observable<Skill[]> {
        return Observable.of(mockSkills);
    }
    // public skills$ = Observable.from(mockSkills);
    public projects$ = Observable.of(PROJECTS);
}

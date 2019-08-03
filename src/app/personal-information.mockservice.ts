import { Observable, of } from 'rxjs';



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
        return of(mockSkills);
    }
    // public skills$ = Observable.from(mockSkills);
    public projects$ = of(PROJECTS);
}

if (typeof Worker !== 'undefined') {
  // Create a new
  const worker = new Worker('./person.worker', { type: 'module' });
  worker.onmessage = ({ data }) => {
    console.log(`page got message: ${data}`);
  };
  worker.postMessage('hello');
} else {
  // Web Workers are not supported in this environment.
  // You should add a fallback so that your program still executes correctly.
}
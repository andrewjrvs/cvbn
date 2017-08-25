import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { PersonalInformationService } from './personal-information.service';
import { Project } from './project';
import { Skill } from './skill';

describe('PersonalInformationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        PersonalInformationService,
        { provide: XHRBackend, useClass: MockBackend }]
    });
  });

  it('should be created', inject([PersonalInformationService], (service: PersonalInformationService) => {
    expect(service).toBeTruthy();
  }));
  describe('getProjects()', () => {
    it('Should return a promise <Project[]>'
      , inject([PersonalInformationService, XHRBackend], (service: PersonalInformationService, mockBackend) => {
      service.getProjects().then((projects) => {
        expect(projects).toBeDefined();
        expect(projects.length).toBeGreaterThan(0);
        projects.forEach(item => {
          expect(item instanceof Project).toBe(true, 'instance of Project');
        });
      });
    }));
  });

  describe('getSkills()', () => {
    it('should call for a json file'
      , inject([PersonalInformationService, XHRBackend], (service: PersonalInformationService, mockBackend) => {
      const mockResponse = {
        data: [
          { 'label': 'Programming', 'sub': 'C#, VB.NET, PHP', 'ability': 94 },
          { 'label': 'Database', 'sub': 'MS SQL, MySQL', 'ability': 82 }
        ]
      };

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });

      service.getSkills().then(skills => {
        expect(skills).toBeDefined();
        expect(skills.length).toBe(2);
        skills.forEach(item => {
          expect(item instanceof Skill).toBe(true, 'instance of Skill');
        });
      });

    }));
  });
});

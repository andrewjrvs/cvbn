import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import 'rxjs/add/operator/filter';

import { PersonalInformationService } from './personal-information.service';
import { Project } from './project';
import { PROJECTS } from './mock-projects';
import { Skill } from './skill';
import { environment } from '../environments/environment';

describe('PersonalInformationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        PersonalInformationService
      ]
    });
  });

  it('should be created', inject([PersonalInformationService], (service: PersonalInformationService) => {
    expect(service).toBeTruthy();
  }));

  describe('Skills', () => {
    it('should do a lookup on the first call'
      , inject([PersonalInformationService, HttpTestingController],
          (service: PersonalInformationService, backend: HttpTestingController) => {
        service.skills$.subscribe();
        backend.expectOne({
          url: environment.urls.skills,
          method: 'GET'
        });
    }));

    it('should only do a single lookup'
      , inject([PersonalInformationService, HttpTestingController],
          (service: PersonalInformationService, backend: HttpTestingController) => {
      service.skills$.subscribe();
      service.skills$.subscribe();
      backend.expectOne({
        url: environment.urls.skills,
        method: 'GET'
      });
    }));

    it('should return a list of skills'
      , waitForAsync(inject([PersonalInformationService, HttpTestingController],
          (service: PersonalInformationService, backend: HttpTestingController) => {
      service.skills$
        .subscribe(
        (data) => {
          expect(data.length).toBe(1);
          expect(data[0].label).toEqual('JAVA');
        }
      );
      backend.match({
        url: environment.urls.skills,
        method: 'GET'
      })[0].flush([{ label: 'JAVA', sub: null, ability: 33 }]);
    })));


    it('should return an error when it occurs'
      , waitForAsync(inject([PersonalInformationService, HttpTestingController],
          (service: PersonalInformationService, backend: HttpTestingController) => {
      service.skills$
        .subscribe(
        (data) => {
          expect('failed').toBe(null);
        },
        (err) => {
          expect(err).toBeTruthy();
          expect(err.error.type).toEqual('FAILED_GETSKILLS_ERROR');
        }
      );
      backend.match({
        url: environment.urls.skills,
        method: 'GET'
      })[0].error(new ErrorEvent('FAILED_GETSKILLS_ERROR'));
    })));
  });

  describe('Projects', () => {

    // xit('should do a lookup on the first call'
    //   , inject([PersonalInformationService, HttpTestingController],
    //       (service: PersonalInformationService, backend: HttpTestingController) => {
    //     service.projects$.subscribe();
    //     backend.expectOne({
    //       url: environment.urls.skills,
    //       method: 'GET'
    //     });
    // }));

    // xit('should only do a single lookup'
    // , inject([PersonalInformationService, HttpTestingController],
    //       (service: PersonalInformationService, backend: HttpTestingController) => {
    //     service.projects$.subscribe();
    //     service.projects$.subscribe();
    //     backend.expectOne({
    //       url: environment.urls.skills,
    //       method: 'GET'
    //     });
    // }));

    it('should return a list of skills'
      , waitForAsync(inject([PersonalInformationService, HttpTestingController],
          (service: PersonalInformationService, backend: HttpTestingController) => {
      service.projects$
        .subscribe(
        (data) => {
          expect(data.length).toBe(PROJECTS.length);
          expect(data[0].title).toEqual(PROJECTS[0].title);
        }
      );
    })));
  });
});

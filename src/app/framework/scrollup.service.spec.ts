import { TestBed, inject } from '@angular/core/testing';

import { WINDOWREF, WindowRef } from './windowRef';

import { ScrollupService } from './scrollup.service';

class MockWindowRef {

}

describe('ScrollupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScrollupService,  { provide: WINDOWREF, useClass: MockWindowRef }]
    }).overrideComponent(ScrollupService, {
      set: {
        providers: [
          { provide: WINDOWREF, useClass: MockWindowRef }
        ]
      }
    });
  });

  it('should be created', inject([ScrollupService], (service: ScrollupService) => {
  }));
});

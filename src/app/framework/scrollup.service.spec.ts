import { TestBed, inject } from '@angular/core/testing';

import { WINDOWREF, WindowRef } from './WindowRef';

import { ScrollupService } from './scrollup.service';

class mockWindowRef {

}

describe('ScrollupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScrollupService,  { provide: WINDOWREF, useClass: mockWindowRef }]
    }).overrideComponent(ScrollupService, {
      set: {
        providers: [
          { provide: WINDOWREF, useClass: mockWindowRef }
        ]
      }
    });
  });

  it('should be created', inject([ScrollupService], (service: ScrollupService) => {
  }));
});

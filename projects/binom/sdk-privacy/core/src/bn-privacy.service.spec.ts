import { TestBed } from '@angular/core/testing';

import { BnPrivacyService } from './bn-privacy.service';

describe('BnPrivacyService', () => {
  let service: BnPrivacyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BnPrivacyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

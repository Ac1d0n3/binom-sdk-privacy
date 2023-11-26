import { TestBed } from '@angular/core/testing';

import { SdkPrivacyService } from './sdk-privacy.service';

describe('SdkPrivacyService', () => {
  let service: SdkPrivacyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SdkPrivacyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

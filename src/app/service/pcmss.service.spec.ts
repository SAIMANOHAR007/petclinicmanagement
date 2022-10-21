import { TestBed } from '@angular/core/testing';

import { PcmssService } from './pcmss.service';

describe('PcmssService', () => {
  let service: PcmssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PcmssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

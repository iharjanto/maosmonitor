import { TestBed } from '@angular/core/testing';

import { FbsService } from './fbs.service';

describe('FbsService', () => {
  let service: FbsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FbsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ParentAccountService } from './parent-account.service';

describe('ParentAccountService', () => {
  let service: ParentAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParentAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

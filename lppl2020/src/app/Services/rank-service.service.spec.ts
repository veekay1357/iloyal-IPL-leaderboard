import { TestBed } from '@angular/core/testing';

import { RankServiceService } from './rank-service.service';

describe('RankServiceService', () => {
  let service: RankServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RankServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { MetValueService } from './met-value.service';

describe('MetValueService', () => {
  let service: MetValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

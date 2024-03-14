import { TestBed } from '@angular/core/testing';

import { WeglowtestService } from './weglowtest.service';

describe('WeglowtestService', () => {
  let service: WeglowtestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeglowtestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

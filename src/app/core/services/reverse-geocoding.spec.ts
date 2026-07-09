import { TestBed } from '@angular/core/testing';

import { ReverseGeocoding } from './reverse-geocoding';

describe('ReverseGeocoding', () => {
  let service: ReverseGeocoding;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReverseGeocoding);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

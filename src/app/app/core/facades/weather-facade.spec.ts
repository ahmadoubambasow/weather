import { TestBed } from '@angular/core/testing';

import { WeatherFacade } from './weather-facade';

describe('WeatherFacade', () => {
  let service: WeatherFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

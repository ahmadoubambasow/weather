import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CurrentWeatherCardComponent } from './current-weather-card.component';

describe('CurrentWeatherCardComponent', () => {
  let component: CurrentWeatherCardComponent;
  let fixture: ComponentFixture<CurrentWeatherCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CurrentWeatherCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentWeatherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WeatherMetricCardComponent } from './weather-metric-card.component';

describe('WeatherMetricCardComponent', () => {
  let component: WeatherMetricCardComponent;
  let fixture: ComponentFixture<WeatherMetricCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [WeatherMetricCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherMetricCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

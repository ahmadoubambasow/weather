import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppWeatherIconComponent } from './app-weather-icon.component';

describe('AppWeatherIconComponent', () => {
  let component: AppWeatherIconComponent;
  let fixture: ComponentFixture<AppWeatherIconComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AppWeatherIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppWeatherIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

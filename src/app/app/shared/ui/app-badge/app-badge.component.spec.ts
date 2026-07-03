import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppBadgeComponent } from './app-badge.component';

describe('AppBadgeComponent', () => {
  let component: AppBadgeComponent;
  let fixture: ComponentFixture<AppBadgeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AppBadgeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

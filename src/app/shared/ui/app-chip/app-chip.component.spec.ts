import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppChipComponent } from './app-chip.component';

describe('AppChipComponent', () => {
  let component: AppChipComponent;
  let fixture: ComponentFixture<AppChipComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AppChipComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

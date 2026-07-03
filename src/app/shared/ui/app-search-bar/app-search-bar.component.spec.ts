import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppSearchBarComponent } from './app-search-bar.component';

describe('AppSearchBarComponent', () => {
  let component: AppSearchBarComponent;
  let fixture: ComponentFixture<AppSearchBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AppSearchBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

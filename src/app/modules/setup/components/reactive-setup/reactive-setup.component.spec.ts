import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveSetupComponent } from './reactive-setup.component';

describe('ReactiveSetupComponent', () => {
  let component: ReactiveSetupComponent;
  let fixture: ComponentFixture<ReactiveSetupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveSetupComponent]
    });
    fixture = TestBed.createComponent(ReactiveSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

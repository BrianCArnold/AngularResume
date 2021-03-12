import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RadioListComponent } from './radio-list.component';

describe('RadioListComponent', () => {
  let component: RadioListComponent;
  let fixture: ComponentFixture<RadioListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckswitchComponent } from './checkswitch.component';

describe('CheckswitchComponent', () => {
  let component: CheckswitchComponent;
  let fixture: ComponentFixture<CheckswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckswitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillCheckListComponent } from './skill-check-list.component';

describe('SkillCheckListComponent', () => {
  let component: SkillCheckListComponent;
  let fixture: ComponentFixture<SkillCheckListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillCheckListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillCheckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

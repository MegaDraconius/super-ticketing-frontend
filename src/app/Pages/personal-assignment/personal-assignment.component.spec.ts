import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalAssignmentComponent } from './personal-assignment.component';

describe('PersonalAssignmentComponent', () => {
  let component: PersonalAssignmentComponent;
  let fixture: ComponentFixture<PersonalAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalAssignmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

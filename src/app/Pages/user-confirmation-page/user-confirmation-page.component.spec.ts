import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConfirmationPageComponent } from './user-confirmation-page.component';

describe('UserConfirmationPageComponent', () => {
  let component: UserConfirmationPageComponent;
  let fixture: ComponentFixture<UserConfirmationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserConfirmationPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserConfirmationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

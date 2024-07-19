import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConfirmationPageComponent } from './admin-confirmation-page.component';

describe('AdminConfirmationPageComponent', () => {
  let component: AdminConfirmationPageComponent;
  let fixture: ComponentFixture<AdminConfirmationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminConfirmationPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminConfirmationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

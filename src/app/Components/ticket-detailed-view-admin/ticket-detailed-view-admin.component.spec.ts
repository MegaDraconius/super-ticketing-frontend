import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketDetailedViewAdminComponent } from './ticket-detailed-view-admin.component';

describe('TicketDetailedViewAdminComponent', () => {
  let component: TicketDetailedViewAdminComponent;
  let fixture: ComponentFixture<TicketDetailedViewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketDetailedViewAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketDetailedViewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyTicketComponent } from './empty-ticket.component';

describe('EmptyTicketComponent', () => {
  let component: EmptyTicketComponent;
  let fixture: ComponentFixture<EmptyTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

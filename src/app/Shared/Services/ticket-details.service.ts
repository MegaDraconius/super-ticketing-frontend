import { EventEmitter, Injectable, Output, signal } from '@angular/core';
import { AdminTicket } from '../Interfaces/admin-ticket';

@Injectable({
  providedIn: 'root',
})
export class TicketDetailsService {
  // @Output() ticketShooter: EventEmitter<AdminTicket> = new EventEmitter();
  ticketSignal = signal<AdminTicket>({
    Id: '',
    TrackingId: '',
    Description: '',
    ReportDate: '',
    SolvedDate: '',
    Status: '',
    Country: '',
    Priority: '',
    Photo: '',
    UserId: '',
    UserEmail: '',
    ItGuyId: '',
    ItGuyEmail: '',
    Title: '',
  });

  constructor() {}

  emitTicketDetails(ticket: any) {
    console.log('Emitiendo detalles de ticket: ', ticket);
    this.ticketSignal.set(ticket);
  }
}

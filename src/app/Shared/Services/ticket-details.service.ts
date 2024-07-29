import { EventEmitter, Injectable, Output } from '@angular/core';
import { AdminTicket } from '../Interfaces/admin-ticket';

@Injectable({
  providedIn: 'root',
})
export class TicketDetailsService {
  @Output() ticketShooter: EventEmitter<AdminTicket> = new EventEmitter();

  constructor() {}

  emitTicketDetails(ticket: any) {
    console.log('Emitiendo detalles de ticket: ', ticket);
    this.ticketShooter.emit(ticket);
  }
}

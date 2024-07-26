import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TicketDetailsService {
  @Output() ticketShooter: EventEmitter<any> = new EventEmitter();

  constructor() {}

  emitTicketDetails(ticket: any) {
    console.log('Emitiendo detalles de ticket: ', ticket);
    this.ticketShooter.emit(ticket);
  }
}

import { Injectable, signal } from '@angular/core';
import { TicketForm } from '../Shared/Interfaces/ticket-form';
import { HttpClient } from '@angular/common/http';
import { catchError, firstValueFrom, of, tap } from 'rxjs';
import { Ticket } from '../Shared/ticket';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TicketServiceService {
  backUrl = environment.API_URL;
  constructor(private http: HttpClient) {}

  getTickets() {
    return this.http.get<Ticket[]>(this.backUrl.concat('/api/Ticket')).pipe(
      tap((x) => {
        return x;
      })
    );
  }

  async createTicket(ticket: Ticket) {
    console.log('Ticket: ', ticket);
    console.log('URL: ', this.backUrl.concat('/api/Ticket'));

    // return this.http.post<Ticket>(this.backUrl.concat('/api/Ticket'), ticket);

    try {
      const result = await firstValueFrom(
        this.http
          .post<Ticket>(this.backUrl.concat('/api/Ticket'), ticket)
          .pipe(catchError((e) => of(e)))
      );
      return result;
    } catch (e) {
      console.error(e);
    }
  }
}

import { Injectable, signal } from '@angular/core';
import { TicketForm } from '../Interfaces/ticket-form';
import { HttpClient } from '@angular/common/http';
import { catchError, firstValueFrom, of, tap } from 'rxjs';
import { Ticket } from '../ticket';
import { environment } from '../../../environments/environment.development';
import { AdminTicket } from '../Interfaces/admin-ticket';
import { UpdatedTicket } from '../Interfaces/updated-ticket';

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

  getAdminTickets() {
    return this.http
      .get<AdminTicket[]>(this.backUrl.concat('/api/Ticket'))
      .pipe(
        tap((x) => {
          return x;
        })
      );
  }

  async createTicket(ticket: Ticket) {
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

  async updateTicket(updateTicket: UpdatedTicket, id: string) {
    const result = await firstValueFrom(
      this.http
        .put(this.backUrl.concat(`/api/Ticket/${id}`), updateTicket)
        .pipe(catchError((e) => of(e)))
    );
    return result;
  }
}

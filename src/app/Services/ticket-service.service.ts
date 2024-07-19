import { Injectable, signal } from '@angular/core';
import { TicketForm } from '../Shared/Interfaces/ticket-form';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketServiceService {
  // constructor(private http: HttpClient) { }

  // enviarIncidencia(formData: FormData): Observable<any> {
  //   return this.http.post(this.tickets, formData);
  // }
}

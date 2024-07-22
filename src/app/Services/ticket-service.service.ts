import { Injectable, signal } from '@angular/core';
import { TicketForm } from '../Shared/Interfaces/ticket-form';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketServiceService {
  constructor(private http: HttpClient) { }

  enviarIncidencia(): Observable<any> {
    return this.http.get("http://localhost:5275/api/Ticket");
  }
}

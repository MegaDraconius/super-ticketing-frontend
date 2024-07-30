import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { status } from '../Interfaces/status';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  backUrl = environment.API_URL;
  http = inject(HttpClient);
  constructor() {}

  getStatus() {
    return this.http
      .get<status[]>(this.backUrl.concat('/api/TicketStatus'))
      .pipe(
        tap((x) => {
          return x;
        })
      );
  }
}

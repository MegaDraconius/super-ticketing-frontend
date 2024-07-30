import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { itGuy } from '../Interfaces/itGuy';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItTeamService {
  backUrl = environment.API_URL;
  http = inject(HttpClient);
  constructor() {}

  getItTeam() {
    return this.http.get<itGuy[]>(this.backUrl.concat('/api/ItGuy')).pipe(
      tap((x) => {
        return x;
      })
    );
  }
}

// import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../Shared/Interfaces/user';
import { catchError, firstValueFrom, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient); // manejar las peticiones de la API (con el get())
  private backUrl = environment.API_URL;

  async login(user: User) { // el async require del await posteriormente
    try {
      const result = await firstValueFrom(this.http.post<User>(this.backUrl.concat("/api/Login"), user).pipe(catchError
        (e => of(e))))

      return result;
    } catch (e) {
      throw e
    }
  }

  async sha256(stringToEncrypt: string) {
    const arrayBuffer = new TextEncoder().encode(stringToEncrypt)
    const hashAsArrayBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer);
    const uint8ViewOfHash = new Uint8Array(hashAsArrayBuffer);
    return Array.from(uint8ViewOfHash).map((b) => b.toString(16).padStart(2, '0')).join('');
  }
}

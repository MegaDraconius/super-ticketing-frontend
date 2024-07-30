// import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../Shared/Interfaces/user';
import { UserResponse } from '../Shared/Interfaces/user-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private http = inject(HttpClient); // manejar las peticiones de la API (con el get())
  // private url = environment.apiUrl;

  async login(user: User) { // el async require del await posteriormente
    try {
      //Implementar en un futuro cuando tengamos el backend
      // const result = await firstValueFrom(this.http.post<User>(this.url.concat("/login"), user).pipe(catchError // FirstValueFrom(rxjs) convierte el observable en promesa al suscribirse en el observable - hay una promesa con el asyinc/await
      //   (e => of(e))))

      const result : UserResponse = {
        accessToken: "asukdasjdasjgdhjgdjgasdhagsshjdgajgad1762",
        user: {
          email: "a@a.com",
          id: 1,
          isAdmin: true
        }
      }
      console.log(result)

      return result;
    } catch (e) {
      throw e
    }
  }
}

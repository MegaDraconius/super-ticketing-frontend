import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { EmptyTicketComponent } from './Components/empty-ticket/empty-ticket.component';
import { HeaderComponent } from './Components/layout/header/header.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatRadioModule,
    MatButtonModule,
    HeaderComponent,
    EmptyTicketComponent,
    TranslateModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'super-ticketing';
  // translate = inject(TranslateService);
  // ngOnInit(): void {
  //   // Recupera el idioma del localStorage al iniciar la aplicación
  //   const savedLanguage = localStorage.getItem('selectedLanguage');
  //   if (savedLanguage) {
  //     this.translate.use(savedLanguage);
  //   } else {
  //     // Establece un idioma por defecto si no hay ninguno guardado
  //     this.translate.setDefaultLang('es');
  //   }
  // }

  // // Cambia el idioma y guarda la selección en localStorage
  // translateText(lang: string) {
  //   this.translate.use(lang);
  //   localStorage.setItem('selectedLanguage', lang);
  // }
}

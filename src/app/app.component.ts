import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/layout/header/header.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TranslateModule],
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

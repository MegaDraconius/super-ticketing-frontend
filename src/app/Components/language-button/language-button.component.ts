import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-button',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './language-button.component.html',
  styleUrl: './language-button.component.scss',
})
export class LanguageButtonComponent {
  translate = inject(TranslateService);
  translateText(lang: string) {
    this.translate.use(lang);
  }
}

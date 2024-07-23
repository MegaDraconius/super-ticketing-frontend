import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-language-button',
  standalone: true,
  imports: [TranslateModule, MatMenuModule, MatButtonModule, MatIconModule],
  templateUrl: './language-button.component.html',
  styleUrl: './language-button.component.scss',
})
export class LanguageButtonComponent {
  translate = inject(TranslateService);
  selectedLanguage: string;
  private cdRef = inject(ChangeDetectorRef);

  constructor() {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    this.selectedLanguage = savedLanguage ? savedLanguage : 'ES';
    this.translate.use(this.selectedLanguage);
  }

  translateText(lang: string) {
    this.selectedLanguage = lang;
    this.translate.use(lang);
    localStorage.setItem('selectedLanguage', lang);
    this.cdRef.detectChanges();
  }
}

import { Component, HostListener } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageButtonComponent } from '../../language-button/language-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, LanguageButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isDropdownVisible = false;
  isAdmin = true;

  toggleDropdown(event: Event): void {
    event.preventDefault();
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('#menu') && !target.closest('.dropdownContent')) {
      this.isDropdownVisible = false;
    }
  }
}

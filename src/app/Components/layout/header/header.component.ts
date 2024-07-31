import { Component, HostListener, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageButtonComponent } from '../../language-button/language-button.component';
import { Router, RouterOutlet } from '@angular/router';
import { TicketServiceService } from '../../../Shared/Services/ticket-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, LanguageButtonComponent,RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isDropdownVisible = false;
  isAdmin = true;
  router = inject(Router)
  ticketService = inject(TicketServiceService);

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
  
  navigateToForm() {
    const role = localStorage.getItem('role');
  if (role === "Admin") {
    this.router.navigate(['/admin/table']);
  } else if (role === "User") {
    this.router.navigate(['/user/table']);
  } else {
    console.error('Role no reconocido o no definido');
  }
}
}

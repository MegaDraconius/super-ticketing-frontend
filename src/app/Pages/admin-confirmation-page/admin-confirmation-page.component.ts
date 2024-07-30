import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TicketServiceService } from '../../Shared/Services/ticket-service.service';

@Component({
  selector: 'app-admin-confirmation-page',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, TranslateModule],
  templateUrl: './admin-confirmation-page.component.html',
  styleUrl: './admin-confirmation-page.component.scss',
})
export class AdminConfirmationPageComponent {
  router = inject(Router);

  ticketService = inject(TicketServiceService)

  comeBack() {
    this.ticketService.getTickets().subscribe((result) => {
      if (result.length > 0) {
        if (localStorage.getItem('role') === "Admin") {
          this.router.navigate(['/admin/table']);
        }else {
          this.router.navigate(['/user/table']);
        }
      }
    });
  }
}

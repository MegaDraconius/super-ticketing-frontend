import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { TicketServiceService } from '../../Shared/Services/ticket-service.service';

@Component({
  selector: 'app-report-button',
  standalone: true,
  imports: [MatIconModule, MatButtonModule,RouterOutlet,RouterLink, TranslateModule],
  templateUrl: './report-button.component.html',
  styleUrl: './report-button.component.scss',
})
export class ReportButtonComponent {
  router = inject(Router)

  ticketService = inject(TicketServiceService);

  navigateToForm() {
    this.ticketService.getTickets().subscribe((result) => {
      if (result.length > 0) {
        if (localStorage.getItem('role') === "Admin") {
          this.router.navigate(['/admin/form']);
        }else {
          this.router.navigate(['/user/form']);
        }
      }
    });
  }
}

import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { TicketServiceService } from '../../Shared/Services/ticket-service.service';

@Component({
  selector: 'app-user-confirmation-page',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, RouterLink, RouterOutlet, TranslateModule],
  templateUrl: './user-confirmation-page.component.html',
  styleUrl: './user-confirmation-page.component.scss',
})
export class UserConfirmationPageComponent {
  router = inject(Router)

  ticketService = inject(TicketServiceService)

  comeBack(){
    this.ticketService.getTickets().subscribe((result) => {
      if (result.length > 0) {
        if (localStorage.getItem('role') === "Admin") {
          this.router.navigate(['/admin/table']);
        }else {
          this.router.navigate(['/user/table']);
        }
      }
    });
    this.router.navigate(['']);
  }
}

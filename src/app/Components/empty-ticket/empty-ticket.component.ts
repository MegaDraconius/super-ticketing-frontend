import { Component, inject, OnInit } from '@angular/core';
import { ReportButtonComponent } from '../report-button/report-button.component';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageButtonComponent } from '../language-button/language-button.component';
import { TicketServiceService } from '../../Shared/Services/ticket-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empty-ticket',
  standalone: true,
  imports: [ReportButtonComponent, TranslateModule, LanguageButtonComponent],
  templateUrl: './empty-ticket.component.html',
  styleUrl: './empty-ticket.component.scss',
})
export class EmptyTicketComponent implements OnInit {
  ticketService = inject(TicketServiceService);
  router = inject(Router);

  ngOnInit(): void {
    const result = this.ticketService.getTickets().subscribe((result) => {
      if (result.length > 0) {
        if (localStorage.getItem('isAdmin') === "true") {
          this.router.navigate(['/adminTable']);
        }else {
          this.router.navigate(['/userTable']);
        }
      }
    });
  }
}

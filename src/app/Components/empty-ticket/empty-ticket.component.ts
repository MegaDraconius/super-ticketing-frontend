import { Component, inject, OnInit } from '@angular/core';
import { ReportButtonComponent } from '../report-button/report-button.component';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageButtonComponent } from '../language-button/language-button.component';
import { TicketServiceService } from '../../Services/ticket-service.service';

@Component({
  selector: 'app-empty-ticket',
  standalone: true,
  imports: [ReportButtonComponent, TranslateModule, LanguageButtonComponent],
  templateUrl: './empty-ticket.component.html',
  styleUrl: './empty-ticket.component.scss',
})
export class EmptyTicketComponent implements OnInit{
  ticketService = inject(TicketServiceService)
  ngOnInit(): void {
    const result = this.ticketService.enviarIncidencia().subscribe(x => console.log(x))
  }
}

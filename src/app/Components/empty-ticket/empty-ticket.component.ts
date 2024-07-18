import { Component } from '@angular/core';
import { ReportButtonComponent } from '../report-button/report-button.component';

@Component({
  selector: 'app-empty-ticket',
  standalone: true,
  imports: [ReportButtonComponent],
  templateUrl: './empty-ticket.component.html',
  styleUrl: './empty-ticket.component.scss',
})
export class EmptyTicketComponent {}

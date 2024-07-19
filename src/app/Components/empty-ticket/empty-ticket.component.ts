import { Component } from '@angular/core';
import { ReportButtonComponent } from '../report-button/report-button.component';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageButtonComponent } from '../language-button/language-button.component';

@Component({
  selector: 'app-empty-ticket',
  standalone: true,
  imports: [ReportButtonComponent, TranslateModule, LanguageButtonComponent],
  templateUrl: './empty-ticket.component.html',
  styleUrl: './empty-ticket.component.scss',
})
export class EmptyTicketComponent {}

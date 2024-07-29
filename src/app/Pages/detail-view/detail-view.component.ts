import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TicketDetailsService } from '../../Shared/Services/ticket-details.service';
import { Observable } from 'rxjs';
import { AdminTicket } from '../../Shared/Interfaces/admin-ticket';

@Component({
  selector: 'app-ticket-detailed-view-admin',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './detail-view.component.html',
  styleUrl: './detail-view.component.scss',
})
export class DetailViewComponent implements OnInit {
  rawRowData!: Observable<AdminTicket>;
  rowData: AdminTicket = {
    Id: '',
    TrackingId: '',
    Description: '',
    ReportDate: '',
    SolvedDate: '',
    Status: '',
    Country: '',
    Priority: '',
    Photo: '',
    UserId: '',
    UserEmail: '',
    ItGuyId: '',
    ItGuyEmail: '',
    Title: '',
  };

  ticketDetails = inject(TicketDetailsService);

  ngOnInit() {
    this.rowData = this.ticketDetails.ticketSignal();
    console.log('rawRowData: ', this.rowData);
  }
}

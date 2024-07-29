import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TicketDetailsService } from '../../Shared/Services/ticket-details.service';
import { Observable } from 'rxjs';
import { AdminTicket } from '../../Shared/Interfaces/admin-ticket';
import { MatOption, MatSelect } from '@angular/material/select';
import { TicketFormComponent } from '../../Components/ticketsForm/ticket-form/ticket-form.component';
import { CommonModule } from '@angular/common';

interface itGuy {
  value: string;
  viewValue: string;
}

interface status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-ticket-detailed-view-admin',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelect,
    MatOption,
    TicketFormComponent,
    CommonModule,
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
  priority: number = 0;
  selectedValue!: string;

  itGuy: itGuy[] = [
    { value: 'laura-0', viewValue: 'Laura' },
    { value: 'alex-1', viewValue: 'Alex' },
    { value: 'sara-2', viewValue: 'Sara' },
  ];

  status: status[] = [
    { value: 'laura-0', viewValue: 'Pendiente' },
    { value: 'alex-1', viewValue: 'En curso' },
    { value: 'sara-2', viewValue: 'Finalizado' },
  ];

  ticketDetails = inject(TicketDetailsService);

  ngOnInit() {
    this.rowData = this.ticketDetails.ticketSignal();

    this.priority = parseInt(this.rowData.Priority)
    console.log('rawRowData: ', this.rowData);
  }
}

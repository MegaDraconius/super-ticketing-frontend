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
import { itGuy } from '../../Shared/Interfaces/itGuy';
import { ItTeamService } from '../../Shared/Services/it-team.service';

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
  itTeam: itGuy[] = [];

  status: status[] = [
    { value: 'pendiente', viewValue: 'Pendiente' },
    { value: 'enCurso', viewValue: 'En curso' },
    { value: 'finalizado', viewValue: 'Finalizado' },
  ];

  ticketDetails = inject(TicketDetailsService);
  itTeamService = inject(ItTeamService);

  ngOnInit() {
    this.rowData = this.ticketDetails.ticketSignal();

    this.priority = parseInt(this.rowData.Priority);
    console.log('rawRowData: ', this.rowData);

    this.itTeamService.getItTeam().subscribe((result) => {
      this.itTeam = result.map((itGuy) => {
        return itGuy;
      });
    });
  }
}

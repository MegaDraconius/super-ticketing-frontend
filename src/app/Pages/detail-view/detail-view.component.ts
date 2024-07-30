import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
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
import { status } from '../../Shared/Interfaces/status';
import { StatusService } from '../../Shared/Services/status.service';
import { Router } from '@angular/router';
import { UpdatedTicket } from '../../Shared/Interfaces/updated-ticket';
import { TicketServiceService } from '../../Shared/Services/ticket-service.service';
import { LanguageButtonComponent } from '../../Components/language-button/language-button.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-ticket-detailed-view-admin',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelect,
    MatOption,
    TicketFormComponent,
    CommonModule,
    ReactiveFormsModule,
    LanguageButtonComponent,
    TranslateModule,
  ],
  templateUrl: './detail-view.component.html',
  styleUrl: './detail-view.component.scss',
})
export class DetailViewComponent implements OnInit {
  adminForm!: FormGroup;

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
    Stored: false
  };
  priority: number = 0;
  selectedValue!: string;
  itTeam: itGuy[] = [];
  status: status[] = [];

  router = inject(Router);

  ticketDetails = inject(TicketDetailsService);
  itTeamService = inject(ItTeamService);
  statusService = inject(StatusService);
  ticketService = inject(TicketServiceService);

  constructor(private fb: FormBuilder) {
    this.adminForm = fb.group({
      feedbackInput: ['', Validators.required],
      itGuyInput: [''],
      statusInput: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.rowData = this.ticketDetails.ticketSignal();

    this.priority = parseInt(this.rowData.Priority);
    console.log('rawRowData: ', this.rowData);

    this.itTeamService.getItTeam().subscribe((result) => {
      this.itTeam = result.map((itGuy) => {
        return itGuy;
      });
    });

    this.statusService.getStatus().subscribe((result) => {
      this.status = result.map((status) => {
        console.log(status);
        return status;
      });
    });
  }

  submit() {
    const updatedTicket: UpdatedTicket = {
      Feedback: this.adminForm.controls['feedbackInput'].value,
      Status: this.adminForm.controls['statusInput'].value,
      Priority: '7',
      Photo: 'string',
      ItGuyEmail: this.adminForm.controls['itGuyInput'].value,
    };
    console.log(updatedTicket);
    const result = this.ticketService.updateTicket(
      updatedTicket,
      this.rowData.Id
    );
    console.log(result);
    this.router.navigate(['/adminConfirmation']);
  }
}

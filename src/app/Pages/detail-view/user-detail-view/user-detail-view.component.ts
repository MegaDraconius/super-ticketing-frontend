import { Component, inject, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatOption, MatSelect } from "@angular/material/select";
import { TicketFormComponent } from "../../../Components/ticketsForm/ticket-form/ticket-form.component";
import { CommonModule } from "@angular/common";
import { LanguageButtonComponent } from "../../../Components/language-button/language-button.component";
import { TranslateModule } from "@ngx-translate/core";
import { AdminTicket } from "../../../Shared/Interfaces/admin-ticket";
import { TicketDetailsService } from "../../../Shared/Services/ticket-details.service";

@Component({
  selector: 'app-user-detail-view',
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
    LanguageButtonComponent,
    TranslateModule
  ],
  templateUrl: './user-detail-view.component.html',
  styleUrl: './user-detail-view.component.scss'
})
export class UserDetailViewComponent implements OnInit{
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
  }
  ticketdetailservice =inject(TicketDetailsService);

  ngOnInit(): void {
      this.rowData = this.ticketdetailservice.ticketSignal();
  }
}

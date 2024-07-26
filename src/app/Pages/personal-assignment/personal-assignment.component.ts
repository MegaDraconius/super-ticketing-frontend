import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TicketServiceService } from '../../Services/ticket-service.service';
import { TicketDetailsService } from '../../Services/ticket-details.service';

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
  templateUrl: './personal-assignment.component.html',
  styleUrl: './personal-assignment.component.scss',
})
export class PersonalAssignmentComponent implements OnInit {
  rowData: any;

  constructor(private ticketDetails: TicketDetailsService) {}

  ngOnInit() {
    this.ticketDetails.ticketShooter.subscribe((ticket: any) => {
      // this.rowData = data;
      console.log('Datos: ', ticket);
    });
  }
}

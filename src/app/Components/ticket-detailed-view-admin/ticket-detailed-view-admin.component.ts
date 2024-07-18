import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-ticket-detailed-view-admin',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './ticket-detailed-view-admin.component.html',
  styleUrl: './ticket-detailed-view-admin.component.scss'
})
export class TicketDetailedViewAdminComponent {

}

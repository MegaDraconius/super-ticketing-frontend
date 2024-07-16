import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TicketTableComponent } from './Components/ticket-table/ticket-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TicketTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'super-ticketing';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmptyTicketComponent } from "./Components/emptyTicket/empty-ticket.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmptyTicketComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'super-ticketing';
}

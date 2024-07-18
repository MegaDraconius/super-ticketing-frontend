import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TicketFormComponent } from "../../Components/ticketsForm/ticket-form/ticket-form.component";


@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [RouterOutlet, TicketFormComponent],
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.scss'
})
export class FormPageComponent {

}

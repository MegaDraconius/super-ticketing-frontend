import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormPageComponent } from "./Pages/form-page/form-page.component";
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { EmptyTicketComponent } from './Components/empty-ticket/empty-ticket.component';
import { HeaderComponent } from './Components/layout/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormPageComponent, MatRadioModule,MatButtonModule,HeaderComponent,EmptyTicketComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'super-ticketing';
}

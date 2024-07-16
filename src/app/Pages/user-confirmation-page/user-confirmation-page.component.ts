import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user-confirmation-page',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './user-confirmation-page.component.html',
  styleUrl: './user-confirmation-page.component.scss',
})
export class UserConfirmationPageComponent {}
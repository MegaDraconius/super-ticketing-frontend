import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-admin-confirmation-page',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './admin-confirmation-page.component.html',
  styleUrl: './admin-confirmation-page.component.scss',
})
export class AdminConfirmationPageComponent {}

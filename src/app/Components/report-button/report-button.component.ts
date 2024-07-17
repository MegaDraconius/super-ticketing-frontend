import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-report-button',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './report-button.component.html',
  styleUrl: './report-button.component.scss',
})
export class ReportButtonComponent {}

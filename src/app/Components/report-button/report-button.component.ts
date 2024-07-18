import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-report-button',
  standalone: true,
  imports: [MatIconModule, MatButtonModule,RouterOutlet,RouterLink],
  templateUrl: './report-button.component.html',
  styleUrl: './report-button.component.scss',
})
export class ReportButtonComponent {
  router = inject(Router)
  
  navigateToForm() {
    this.router.navigate(['/form']);
  }
  
}

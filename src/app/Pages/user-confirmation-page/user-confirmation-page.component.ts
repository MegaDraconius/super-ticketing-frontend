import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-confirmation-page',
  standalone: true,
  imports: [MatIconModule, MatButtonModule,RouterLink,RouterOutlet, TranslateModule],
  templateUrl: './user-confirmation-page.component.html',
  styleUrl: './user-confirmation-page.component.scss',
})
export class UserConfirmationPageComponent {
  router = inject(Router)
  
  comeBack(){
    this.router.navigate(['']);
  }
}

import { Routes } from '@angular/router';
import { AdminConfirmationPageComponent } from './Pages/admin-confirmation-page/admin-confirmation-page.component';
import { UserConfirmationPageComponent } from './Pages/user-confirmation-page/user-confirmation-page.component';

export const routes: Routes = [
  { path: 'adminConfirmation', component: AdminConfirmationPageComponent },
  { path: 'userConfirmation', component: UserConfirmationPageComponent },
];

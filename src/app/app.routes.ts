import { Routes } from '@angular/router';
import { TicketTableComponent } from './Components/ticket-table/ticket-table.component';
import { AdminConfirmationPageComponent } from './Pages/admin-confirmation-page/admin-confirmation-page.component';
import { UserConfirmationPageComponent } from './Pages/user-confirmation-page/user-confirmation-page.component';

export const routes: Routes = [
  { path: '', component: TicketTableComponent },
  { path: 'adminConfirmation', component: AdminConfirmationPageComponent },
  { path: 'userConfirmation', component: UserConfirmationPageComponent },
];

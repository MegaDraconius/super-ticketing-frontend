import { Routes } from '@angular/router';
import { AdminConfirmationPageComponent } from './Pages/admin-confirmation-page/admin-confirmation-page.component';
import { UserConfirmationPageComponent } from './Pages/user-confirmation-page/user-confirmation-page.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { TicketTableComponent } from './Components/ticket-table/ticket-table.component';

export const routes: Routes = [
  { path: '', component: TicketTableComponent }
  { path: 'adminConfirmation', component: AdminConfirmationPageComponent },
  { path: 'userConfirmation', component: UserConfirmationPageComponent },
];


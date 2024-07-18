import { Routes } from '@angular/router';
import { TicketTableComponent } from './Components/ticket-table/ticket-table.component';
import { LayoutComponent } from './Components/layout/layout/layout.component';
import { EmptyTicketComponent } from './Components/empty-ticket/empty-ticket.component';
import { AdminConfirmationPageComponent } from './Pages/admin-confirmation-page/admin-confirmation-page.component';
import { UserConfirmationPageComponent } from './Pages/user-confirmation-page/user-confirmation-page.component';
import { LoginComponent } from './Pages/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: EmptyTicketComponent },
      { path: 'table', component: TicketTableComponent },
    ],
  },
  { path: 'layout', redirectTo: '' },
  { path: 'login', component: LoginComponent },
  { path: 'adminConfirmation', component: AdminConfirmationPageComponent },
  { path: 'userConfirmation', component: UserConfirmationPageComponent },

];

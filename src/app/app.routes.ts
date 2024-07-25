import { Routes } from '@angular/router';
import { EmptyTicketComponent } from './Components/empty-ticket/empty-ticket.component';
import { LayoutComponent } from './Components/layout/layout/layout.component';
import { AdminTableComponent } from './Components/Table/admin-table/admin-table.component';
import { TicketTableComponent } from './Components/Table/user-table/ticket-table.component';
import { TicketFormComponent } from './Components/ticketsForm/ticket-form/ticket-form.component';
import { AdminConfirmationPageComponent } from './Pages/admin-confirmation-page/admin-confirmation-page.component';
import { LoginComponent } from './Pages/login/login.component';
import { PersonalAssignmentComponent } from './Pages/personal-assignment/personal-assignment.component';
import { UserConfirmationPageComponent } from './Pages/user-confirmation-page/user-confirmation-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: EmptyTicketComponent },
      { path: 'form', component: TicketFormComponent },
      { path: 'adminConfirmation', component: AdminConfirmationPageComponent },
      { path: 'userConfirmation', component: UserConfirmationPageComponent },
      { path: 'adminTable', component: AdminTableComponent },
      { path: 'userTable', component: TicketTableComponent },
      { path: 'detailedView', component: PersonalAssignmentComponent },
    ],
  },
  { path: 'layout', redirectTo: '' },
  { path: 'login', component: LoginComponent },
  { path: 'adminConfirmation', component: AdminConfirmationPageComponent },
  { path: 'userConfirmation', component: UserConfirmationPageComponent },
];

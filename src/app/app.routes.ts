import { Routes } from '@angular/router';
import { EmptyTicketComponent } from './Components/empty-ticket/empty-ticket.component';
import { LayoutComponent } from './Components/layout/layout/layout.component';
import { AdminTableComponent } from './Components/Table/admin-table/admin-table.component';
import { TicketTableComponent } from './Components/Table/user-table/ticket-table.component';
import { TicketFormComponent } from './Components/ticketsForm/ticket-form/ticket-form.component';
import { AdminConfirmationPageComponent } from './Pages/admin-confirmation-page/admin-confirmation-page.component';
import { LoginComponent } from './Pages/login/login.component';
import { UserConfirmationPageComponent } from './Pages/user-confirmation-page/user-confirmation-page.component';
import { authGuard } from './Guards/auth.guard';
import { UserDetailViewComponent } from './Pages/detail-view/user-detail-view/user-detail-view.component';
import { DetailViewComponent } from './Pages/detail-view/admin-detail-view/detail-view.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: LayoutComponent,
    canActivate: [authGuard],
    //data: { roles: ['admin'] },
    children: [
      { path: '',  component: EmptyTicketComponent},
      {path: 'table', component: AdminTableComponent},
      { path: 'form', component: TicketFormComponent },
      { path: 'confirmation', component: AdminConfirmationPageComponent },
      { path: 'detailedView', component: DetailViewComponent },
    ]
  },
  {
    path: 'user',
    component: LayoutComponent,
    canActivate: [authGuard],
    //data: { roles: ['user'] },
    children: [
      { path: '', component: EmptyTicketComponent },
      { path: 'form', component: TicketFormComponent },
      { path: 'confirmation', component: UserConfirmationPageComponent },
      { path: 'table', component: TicketTableComponent },
      { path: 'detailedView', component: UserDetailViewComponent },
    ]

  },
  { path: 'login', redirectTo: '' },
];


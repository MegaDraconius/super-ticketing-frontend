import { Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { TicketTableComponent } from './Components/ticket-table/ticket-table.component';
import { LayoutComponent } from './Components/layout/layout/layout.component';
import { EmptyTicketComponent } from './Components/emptyTicket/empty-ticket.component';

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
];

import { Component } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { AdminTicket } from '../../../Shared/Interfaces/admin-ticket';
import { ReportButtonComponent } from '../../report-button/report-button.component';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageButtonComponent } from '../../language-button/language-button.component';
import { Ticket } from '../../../Shared/ticket';
import { TicketDetailsService } from '../../../Services/ticket-details.service';

const AdminELEMENT_DATA: AdminTicket[] = [
  {
    Id: 'es-0000',
    ticketTitle: 'Ordenador roto',
    user: 'example@example.com',
    startDate: '15/07/2024',
    priority: 'No urgente',
    status: 'pendiente',
  },
  {
    Id: 'es-0001',
    ticketTitle: 'Cargador estropeado',
    user: 'example@example.com',
    startDate: '12/07/2024',
    priority: 'No urgente',
    status: 'abierto',
  },
  {
    Id: 'es-0002',
    ticketTitle: 'Formulario no funciona',
    user: 'example@example.com',
    startDate: '12/07/2024',
    priority: 'No urgente',
    status: 'pendiente',
  },
  {
    Id: 'es-0003',
    ticketTitle: 'Toy triste :(',
    user: 'example@example.com',
    startDate: '10/07/2024',
    priority: 'No urgente',
    status: 'en proceso',
  },
  {
    Id: 'es-0004',
    ticketTitle: 'Pantalla negra',
    user: 'example@example.com',
    startDate: '04/07/2024',
    priority: 'No urgente',
    status: 'en proceso',
  },
  {
    Id: 'es-0005',
    ticketTitle: 'Teclado no responde',
    user: 'example@example.com',
    startDate: '04/07/2024',
    priority: 'No urgente',
    status: 'resuelto',
  },
  {
    Id: 'es-0006',
    ticketTitle: 'Web caída',
    user: 'example@example.com',
    startDate: '15/07/2024',
    priority: 'urgente',
    status: 'resuelto',
  },
];

@Component({
  selector: 'app-admin-table',
  standalone: true,
  imports: [
    ReportButtonComponent,
    LanguageButtonComponent,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    TranslateModule,
  ],
  templateUrl: './admin-table.component.html',
  styleUrl: './admin-table.component.scss',
})
export class AdminTableComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'Id',
    'ticketTitle',
    'user',
    'startDate',
    'priority',
    'status',
    'actions',
    'actions2',
  ];
  dataSource = new MatTableDataSource<AdminTicket>(AdminELEMENT_DATA);

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(private ticketDetails: TicketDetailsService) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onSubmit(ticketInfo: Ticket) {}

  getTicketDetails(rowData: AdminTicket) {
    console.log('ticket details: ', rowData);
    this.ticketDetails.emitTicketDetails(rowData);
  }
}

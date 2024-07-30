import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { AdminTicket } from '../../../Shared/Interfaces/admin-ticket';
import { LanguageButtonComponent } from '../../language-button/language-button.component';
import { ReportButtonComponent } from '../../report-button/report-button.component';

const AdminELEMENT_DATA: AdminTicket[] = [
  {
    Id: 'es-0000',
    ticketTitle: 'Ordenador roto',
    user: 'example@example.com',
    startDate: '15/07/2024',
    priority: 'No urgente',
    status: 'pendiente',
    archived: false,
  },
  {
    Id: 'es-0001',
    ticketTitle: 'Cargador estropeado',
    user: 'example@example.com',
    startDate: '12/07/2024',
    priority: 'No urgente',
    status: 'abierto',
    archived: false,
  },
  {
    Id: 'es-0002',
    ticketTitle: 'Formulario no funciona',
    user: 'example@example.com',
    startDate: '12/07/2024',
    priority: 'No urgente',
    status: 'pendiente',
    archived: false,
  },
  {
    Id: 'es-0003',
    ticketTitle: 'Toy triste :(',
    user: 'example@example.com',
    startDate: '10/07/2024',
    priority: 'No urgente',
    status: 'en proceso',
    archived: false,
  },
  {
    Id: 'es-0004',
    ticketTitle: 'Pantalla negra',
    user: 'example@example.com',
    startDate: '04/07/2024',
    priority: 'No urgente',
    status: 'en proceso',
    archived: false,
  },
  {
    Id: 'es-0005',
    ticketTitle: 'Teclado no responde',
    user: 'example@example.com',
    startDate: '04/07/2024',
    priority: 'No urgente',
    status: 'resuelto',
    archived: false,
  },
  {
    Id: 'es-0006',
    ticketTitle: 'Web caída',
    user: 'example@example.com',
    startDate: '15/07/2024',
    priority: 'urgente',
    status: 'resuelto',
    archived: false,
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
    MatSelectModule,
    TranslateModule,
  ],
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.scss'],
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

  constructor() {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.applyArchivedFilter();
  }

  applyArchivedFilter() {
    this.dataSource.filterPredicate = (data: AdminTicket, filter: string) => {
      return !data.archived && (
        data.Id.toLowerCase().includes(filter) ||
        data.ticketTitle.toLowerCase().includes(filter) ||
        data.user.toLowerCase().includes(filter) ||
        data.priority.toLowerCase().includes(filter) ||
        data.status.toLowerCase().includes(filter)
      );
    };
    this.dataSource.filter = this.dataSource.filter;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();

    this.dataSource.filterPredicate = (data: AdminTicket, filter: string) => {
      return !data.archived && (
        data.Id.toLowerCase().includes(filter) ||
        data.ticketTitle.toLowerCase().includes(filter) ||
        data.user.toLowerCase().includes(filter) ||
        data.priority.toLowerCase().includes(filter) ||
        data.status.toLowerCase().includes(filter)
      );
    };

    this.dataSource.filter = filterValue;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  archived(ticket: AdminTicket) {
    const index = this.dataSource.data.findIndex((t) => t.Id === ticket.Id);
    if (index > -1) {
      this.dataSource.data[index].archived = true;
      this.applyArchivedFilter();
    }
  }

  onStatusFilterChange(event: MatSelectChange) {
    const filterValue = event.value.toLowerCase();
    this.dataSource.filterPredicate = (data: AdminTicket, filter: string) => {
      return !data.archived && data.status.toLowerCase() === filter;
    };

    this.dataSource.filter = filterValue;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReportButtonComponent } from '../../report-button/report-button.component';
import { Ticket } from '../../../Shared/ticket';
import { LanguageButtonComponent } from '../../language-button/language-button.component';
import { TranslateModule } from '@ngx-translate/core';

const ELEMENT_DATA: Ticket[] = [
  { ticketTitle: 'Ordenador roto', startDate: '15/07/2024', status: 'abierto' },
  {
    ticketTitle: 'Cargador estropeado',
    startDate: '12/07/2024',
    status: 'abierto',
  },
  {
    ticketTitle: 'Formulario no funciona',
    startDate: '12/07/2024',
    status: 'pendiente',
  },
  {
    ticketTitle: 'Toy triste :(',
    startDate: '10/07/2024',
    status: 'en proceso',
  },
  {
    ticketTitle: 'Pantalla negra',
    startDate: '04/07/2024',
    status: 'en proceso',
  },
  {
    ticketTitle: 'Teclado no responde',
    startDate: '04/07/2024',
    status: 'resuelto',
  },
  { ticketTitle: 'Web caída', startDate: '15/07/2024', status: 'resuelto' },
];

@Component({
  selector: 'app-ticket-table',
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
  templateUrl: './ticket-table.component.html',
  styleUrl: './ticket-table.component.scss',
})
export class TicketTableComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'ticketTitle',
    'startDate',
    'status',
    'actions',
  ];
  dataSource = new MatTableDataSource<Ticket>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor() {}

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
}

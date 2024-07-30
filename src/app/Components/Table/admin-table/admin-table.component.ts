import { Component, inject, OnInit } from '@angular/core';
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
import { TicketDetailsService } from '../../../Shared/Services/ticket-details.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TicketServiceService } from '../../../Shared/Services/ticket-service.service';
import { DateHandlingService } from '../../../Shared/Services/date-handling.service';

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
export class AdminTableComponent implements AfterViewInit, OnInit {
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

  ticketRawData!: Observable<AdminTicket[]>;
  ticketData: AdminTicket[] = [];
  dataSource!: MatTableDataSource<AdminTicket>;

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  router = inject(Router);
  ticketService = inject(TicketServiceService);
  ticketDetails = inject(TicketDetailsService);
  dateHandlingService = inject(DateHandlingService);

  ngOnInit(): void {
    this.ticketRawData = this.ticketService.getAdminTickets();
    this.ticketRawData.subscribe((result) => {
      this.ticketData = result.map((ticket) => {
        const parsedDate = this.dateHandlingService.parseDate(
          ticket.ReportDate,
          '-'
        );
        ticket.ReportDate = parsedDate;
        return ticket;
      });
      this.dataSource = new MatTableDataSource<AdminTicket>(this.ticketData);
    });
  }

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

  getTicketDetails(rowData: AdminTicket) {
    console.log('ticket details: ', rowData);
    this.ticketDetails.emitTicketDetails(rowData);
    this.router.navigate(['/detailedView']);
  }
}

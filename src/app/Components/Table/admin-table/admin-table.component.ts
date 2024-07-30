import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { AdminTicket } from '../../../Shared/Interfaces/admin-ticket';
import { DateHandlingService } from '../../../Shared/Services/date-handling.service';
import { TicketDetailsService } from '../../../Shared/Services/ticket-details.service';
import { TicketServiceService } from '../../../Shared/Services/ticket-service.service';
import { LanguageButtonComponent } from '../../language-button/language-button.component';
import { ReportButtonComponent } from '../../report-button/report-button.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { StatusService } from '../../../Shared/Services/status.service';
import { status } from '../../../Shared/Interfaces/status';

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
  statusData: status[] = [];
  dataSource!: MatTableDataSource<AdminTicket>;

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  router = inject(Router);
  ticketService = inject(TicketServiceService);
  ticketDetails = inject(TicketDetailsService);
  dateHandlingService = inject(DateHandlingService);
  statusService = inject(StatusService);

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

      console.log(this.ticketData);
      this.dataSource = new MatTableDataSource<AdminTicket>(this.ticketData);
    });

    this.statusService.getStatus().subscribe((statusValue) => {
      this.statusData = statusValue.map((statusInfo: status) => {
        return statusInfo;
      })
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.applyArchivedFilter();
  }

  applyArchivedFilter() {
    this.dataSource.filter = this.dataSource.filter;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  archived(ticket: AdminTicket) {
    const index = this.dataSource.data.findIndex((t) => t.Id === ticket.Id);
    if (index > -1) {
      this.applyArchivedFilter();
    }
  }

  onStatusFilterChange(event: MatSelectChange) {
    const filterValue = event.value.toLowerCase();
    this.dataSource.filter = filterValue;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getTicketDetails(rowData: AdminTicket) {
    console.log('ticket details: ', rowData);
    this.ticketDetails.emitTicketDetails(rowData);
    this.router.navigate(['/admin/detailedView']);
  }
}

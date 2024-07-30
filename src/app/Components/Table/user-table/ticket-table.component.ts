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
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { map, Observable, tap } from 'rxjs';
import { DateHandlingService } from '../../../Shared/Services/date-handling.service';
import { Ticket } from '../../../Shared/ticket';
import { LanguageButtonComponent } from '../../language-button/language-button.component';
import { ReportButtonComponent } from '../../report-button/report-button.component';
import { TicketServiceService } from '../../../Shared/Services/ticket-service.service';

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
export class TicketTableComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = [
    'ticketTitle',
    'startDate',
    'status',
    'actions',
  ];

  ticketRawData!: Observable<Ticket[]>;
  ticketData: Ticket[] = [];

  dataSource = new MatTableDataSource<Ticket>();

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  ticketService = inject(TicketServiceService);
  dateHandlingService = inject(DateHandlingService);

  ngOnInit(): void {
    this.ticketRawData = this.ticketService.getTickets();
    this.ticketRawData.subscribe((result) => {
      this.ticketData = result.map((ticket) => {
        const parsedDate = this.dateHandlingService.parseDate(
          ticket.ReportDate,
          '-'
        );
        ticket.ReportDate = parsedDate;
        return ticket;
      });

      this.dataSource.data = this.ticketData;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
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
}

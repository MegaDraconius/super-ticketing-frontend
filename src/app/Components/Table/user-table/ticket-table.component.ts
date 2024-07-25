import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
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
import { map, Observable, tap } from 'rxjs';
import { TicketServiceService } from '../../../Services/ticket-service.service';


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

  dataSource!: MatTableDataSource<Ticket>;

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  ticketService = inject(TicketServiceService);

  ngOnInit(): void {
    this.ticketRawData = this.ticketService.getTickets();
    this.ticketRawData.subscribe((result) => {
      this.ticketData = [...result];
      this.dataSource = new MatTableDataSource<Ticket>(this.ticketData);
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

import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Ticket } from '../../Shared/ticket';
import { ReportButtonComponent } from '../report-button/report-button.component';
import { LanguageButtonComponent } from '../language-button/language-button.component';
import { TranslateModule } from '@ngx-translate/core';
import { TicketServiceService } from '../../Services/ticket-service.service';
import { tap } from 'rxjs';


const ELEMENT_DATA: Ticket[] = [
  {
    Id: "669a27b4c55c2c4747964df4",
    TrackingId: "ES-00000101",
    Title: "Ordenador vaeriado",
    Description: "Desde Esta mañana no me funciona el ordenador",
    ReportDate: "2024-07-19T08:24:44.361Z",
    Status: "pendingggggggg",
    Country: "669a13bee4cd3cf42f7728db",
    Priority: "Alta",
    UserId: "6697c069e4cd3cf42f7728d6",
    ITEmployees: "6697bec9e4cd3cf42f7728d4"
  },
  {
    Id: "669d145b6f3347c72095003d",
    TrackingId: "string",
    Title: "string",
    Description: "string",
    ReportDate: "2024-07-21T15:11:52.583Z",
    Status: "string",
    Country: "669a13bee4cd3cf42f7728db",
    Priority: "string",
    UserId: "669a13bee4cd3cf42f7728db",
    ITEmployees: "6697bec9e4cd3cf42f7728d4"
  }
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

  ticketService = inject(TicketServiceService)
  ngOnInit(): void {
    
  }

  ngAfterViewInit() {

    const result = this.ticketService.enviarIncidencia().pipe(tap(x => console.log(x)));
    console.log(result);
    console.log("Datasource: ", this.dataSource);
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

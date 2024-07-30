import { TestBed } from '@angular/core/testing';

import { TicketServiceService } from './ticket-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const TicketListMock = [
  {
    Id: "00001",
    TrackingId: "001",
    Description: "el PC no funciona",
    ReportDate: "2024-06-07",
    SolvedDate: "2024-06-08",
    Status: "pendiente",
    Country: "españa",
    Priority: "7",
    Photo: "foto.png",
    UserId: "093",
    UserEmail: "user@gmail.com",
    ItGuyId: "098",
    ItGuyEmail: "it@gmail.com",
    Title: "incidencia PC",
  }
]

const httpClientMock ={
  get: jest.fn(),
}

describe('TicketServiceService', () => {
  let service: TicketServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TicketServiceService,{provide:HttpClient, useValue: httpClientMock}],
    });
    service = TestBed.inject(TicketServiceService);
    httpClientMock.get.mockReturnValue(TicketListMock);
  });

  it('getTickets returns TicketList', () => {
    service.getTickets();

    expect(httpClientMock.get).toHaveBeenCalled();
  });
});

export interface Ticket {
  Id?: string;
  TrackingId: string;
  Title: string;
  Description: string;
  ReportDate: string;
  SolvedDate?: string;
  Status: string;
  Country: string;
  Priority: string;
  // Photo?: string;
  UserId: string;
  ITEmployees?: string;
  file:File;
}

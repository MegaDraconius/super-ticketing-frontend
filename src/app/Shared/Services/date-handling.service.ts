import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateHandlingService {
  constructor() {}

  parseDate(date: string, splitValue: string) {
    const parsedDate = date.split('T')[0]; // 2024-07-25T-......
    const splitParsedDate = parsedDate.split(splitValue); //[2024, 07, 25]

    //25-07-2024
    const finalDate = `${splitParsedDate[2]}-${splitParsedDate[1]}-${splitParsedDate[0]}`;

    return finalDate;
  }
}

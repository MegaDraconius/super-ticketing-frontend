import { TestBed } from '@angular/core/testing';

import { ItTeamService } from './it-team.service';

describe('ItTeamService', () => {
  let service: ItTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItTeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

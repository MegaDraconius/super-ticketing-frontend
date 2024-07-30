import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LocalStorageService } from '../Shared/Services/local-storage.service';
import { authGuard } from './auth-guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('authGuard', () => {
  let localStorageService: jasmine.SpyObj<LocalStorageService>;
  let router: Router;

  beforeEach(() => {
    const localStorageServiceSpy = jasmine.createSpyObj('LocalStorageService', ['getItem']);
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        { provide: LocalStorageService, useValue: localStorageServiceSpy },
      ],
    });

    localStorageService = TestBed.inject(LocalStorageService) as jasmine.SpyObj<LocalStorageService>;
    router = TestBed.inject(Router);
  });

  afterEach(() => {
    localStorageService.getItem.calls.reset();
  });

  it('should allow activation if token exists', () => {
    localStorageService.getItem.and.returnValue('valid-token');

    const result = authGuard({} as any, {} as any);

    expect(result).toBeTrue();
  });

  it('should deny activation and navigate to login if token does not exist', () => {
    spyOn(router, 'navigate');
    spyOn(window, 'alert');
    localStorageService.getItem.and.returnValue(null);

    const result = authGuard({} as any, {} as any);

    expect(result).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(['']);
    expect(window.alert).toHaveBeenCalledWith('You should be logged in');
  });
});
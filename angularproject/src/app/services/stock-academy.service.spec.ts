import { TestBed } from '@angular/core/testing';

import { StockAcademyService } from './stock-academy.service';

describe('StockAcademyService', () => {
  let service: StockAcademyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockAcademyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

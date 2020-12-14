import { TestBed } from '@angular/core/testing';

import { PharmaciesServicesService } from './pharmacies-services.service';

describe('PharmaciesServicesService', () => {
  let service: PharmaciesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PharmaciesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DocteurServicesService } from './docteur-services.service';

describe('DocteurServicesService', () => {
  let service: DocteurServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocteurServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

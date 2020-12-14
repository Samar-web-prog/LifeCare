import { TestBed } from '@angular/core/testing';

import { GUARDAUTHGuard } from './guardauth.guard';

describe('GUARDAUTHGuard', () => {
  let guard: GUARDAUTHGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GUARDAUTHGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

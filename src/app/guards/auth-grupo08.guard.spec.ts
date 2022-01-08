import { TestBed } from '@angular/core/testing';

import { AuthGRUPO08Guard } from './auth-grupo08.guard';

describe('AuthGRUPO08Guard', () => {
  let guard: AuthGRUPO08Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGRUPO08Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

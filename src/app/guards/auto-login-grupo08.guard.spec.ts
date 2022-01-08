import { TestBed } from '@angular/core/testing';

import { AutoLoginGRUPO08Guard } from './auto-login-grupo08.guard';

describe('AutoLoginGRUPO08Guard', () => {
  let guard: AutoLoginGRUPO08Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutoLoginGRUPO08Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AdminGRUPO08Guard } from './admin-grupo08.guard';

describe('AdminGRUPO08Guard', () => {
  let guard: AdminGRUPO08Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminGRUPO08Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

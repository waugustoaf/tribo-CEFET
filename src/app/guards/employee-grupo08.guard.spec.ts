import { TestBed } from '@angular/core/testing';

import { EmployeeGRUPO08Guard } from './employee-grupo08.guard';

describe('EmployeeGRUPO08Guard', () => {
  let guard: EmployeeGRUPO08Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmployeeGRUPO08Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

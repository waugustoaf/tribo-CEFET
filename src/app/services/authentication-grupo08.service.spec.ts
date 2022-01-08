import { TestBed } from '@angular/core/testing';

import { AuthenticationGRUPO08Service } from './authentication-grupo08.service';

describe('AuthenticationGRUPO08Service', () => {
  let service: AuthenticationGRUPO08Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationGRUPO08Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { IntroGRUPO08Guard } from './intro-grupo08.guard';

describe('IntroGRUPO08Guard', () => {
  let guard: IntroGRUPO08Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IntroGRUPO08Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

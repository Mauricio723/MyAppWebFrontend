import { TestBed } from '@angular/core/testing';

import { Myappweb01Service } from './myappweb01.service';

describe('Myappweb01Service', () => {
  let service: Myappweb01Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Myappweb01Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ImbdService } from './imbd.service';

describe('ImbdService', () => {
  let service: ImbdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImbdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

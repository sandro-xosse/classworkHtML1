import { TestBed } from '@angular/core/testing';

import { DatamenagmentserviceService } from './datamenagmentservice.service';

describe('DatamenagmentserviceService', () => {
  let service: DatamenagmentserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatamenagmentserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

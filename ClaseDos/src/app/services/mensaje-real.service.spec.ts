import { TestBed } from '@angular/core/testing';

import { MensajeRealService } from './mensaje-real.service';

describe('MensajeRealService', () => {
  let service: MensajeRealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensajeRealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

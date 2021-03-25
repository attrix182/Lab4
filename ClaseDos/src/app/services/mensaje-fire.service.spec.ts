import { TestBed } from '@angular/core/testing';

import { MensajeFireService } from './mensaje-fire.service';

describe('MensajeFireService', () => {
  let service: MensajeFireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensajeFireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

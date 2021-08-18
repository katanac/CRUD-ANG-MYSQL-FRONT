import { TestBed } from '@angular/core/testing';

import { ServicioLocalService } from './servicio-local.service';

describe('ServicioLocalService', () => {
  let service: ServicioLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

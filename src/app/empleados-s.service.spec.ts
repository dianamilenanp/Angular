import { TestBed } from '@angular/core/testing';

import { EmpleadosSService } from './empleados-s.service';

describe('EmpleadosSService', () => {
  let service: EmpleadosSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpleadosSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

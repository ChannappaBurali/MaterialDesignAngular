import { TestBed } from '@angular/core/testing';

import { AuthoServiceService } from './autho-service.service';

describe('AuthoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthoServiceService = TestBed.get(AuthoServiceService);
    expect(service).toBeTruthy();
  });
});

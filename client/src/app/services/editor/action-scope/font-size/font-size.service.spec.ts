import { TestBed } from '@angular/core/testing';

import { FontSizeService } from './font-size.service';

describe('FontSizeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FontSizeService = TestBed.get(FontSizeService);
    expect(service).toBeTruthy();
  });
});

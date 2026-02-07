import { TestBed } from '@angular/core/testing';

import { HiddenWordsService } from './hidden-words-service';

describe('HiddenWordsService', () => {
  let service: HiddenWordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HiddenWordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CandidateLanguagesService } from './candidate-languages.service';

describe('CandidateLanguagesService', () => {
  let service: CandidateLanguagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidateLanguagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

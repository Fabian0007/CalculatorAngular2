/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TMDBAPIService } from './tmdbapi.service';

describe('TMDBAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TMDBAPIService]
    });
  });

  it('should ...', inject([TMDBAPIService], (service: TMDBAPIService) => {
    expect(service).toBeTruthy();
  }));
});

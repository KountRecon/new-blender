import { TestBed, inject } from '@angular/core/testing';

import { PostManPatchService } from './post-man-patch.service';

describe('PostManPatchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostManPatchService]
    });
  });

  it('should be created', inject([PostManPatchService], (service: PostManPatchService) => {
    expect(service).toBeTruthy();
  }));
});

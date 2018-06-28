import { TestBed, inject } from '@angular/core/testing';

import { UsersFirebaseService } from './users-firebase.service';

describe('UsersFirebaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersFirebaseService]
    });
  });

  it('should be created', inject([UsersFirebaseService], (service: UsersFirebaseService) => {
    expect(service).toBeTruthy();
  }));
});

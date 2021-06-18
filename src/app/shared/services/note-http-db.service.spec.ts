import { TestBed } from '@angular/core/testing';

import { NoteHTTPDbService } from './note-http-db.service';

describe('NoteHTTPDbService', () => {
  let service: NoteHTTPDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteHTTPDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

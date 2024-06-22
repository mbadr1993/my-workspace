import { TestBed } from '@angular/core/testing';

import { MyLibTest2000Service } from './my-lib-test-2000.service';

describe('MyLibTest2000Service', () => {
  let service: MyLibTest2000Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyLibTest2000Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

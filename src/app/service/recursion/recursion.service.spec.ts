import { TestBed } from '@angular/core/testing';

import { RecursionService } from './recursion.service';

describe('RecursionService', () => {
  let service: RecursionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecursionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Recursion on x=0.4, y=1.1735', () => {
    let x = 0.4;
    let y = 1.1735;
    let xy = service.getTab();
    let y1: number = 1000;
    y1 = xy.get(x);
    expect(y.toFixed(4)).toBe(y1.toFixed(4));
  })
});

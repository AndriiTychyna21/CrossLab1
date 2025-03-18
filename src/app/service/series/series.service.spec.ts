import { TestBed } from '@angular/core/testing';

import { SeriesService } from './series.service';

describe('SeriesService', () => {
  let service: SeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Series on x=0.4, y=1.1735', () => {
    let x = 0.4;
    let y = 1.1735;
    let xy = service.getTab();
    let y1: number = 1000;
    y1 = xy.get(x);
    expect(y.toFixed(4)).toBe(y1.toFixed(4));
  })
});

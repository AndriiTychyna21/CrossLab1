import { Injectable, Optional } from '@angular/core';
import { LogService } from '../log/log.service';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private xy = new Map();
  constructor(@Optional() private LogService: LogService) {}
  getTab(xs: number = -2, xn: number = 2, step: number = 0.2){
    this.xy.clear();
    let y = 0;
    while (xs <= xn){
      y = this.getSeries(xs);
      this.xy.set(xs, y);
      if (this.LogService){
        this.LogService.write('x=' + xs.toFixed(2) + ' y=' + y.toFixed(4));
      }
      xs = parseFloat((xs + step).toFixed(5));
    }
    return this.xy;
  }
  getSeries(x: number){
      let sum = 1,
      min = 1e-12,
      mem = 1,
      sqr = x * x,
      denom = 1;
      do {
        mem = mem * sqr / denom;
        sum += mem;
        denom += 1;
      } while (mem > min)
        return sum;
  }
}

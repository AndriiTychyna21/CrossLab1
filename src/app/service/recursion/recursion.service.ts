import { Injectable, Optional } from '@angular/core';
import { LogService } from '../log/log.service';

@Injectable({
  providedIn: 'root'
})
export class RecursionService {
private xy = new Map();
  constructor(@Optional() private LogService: LogService) {}
  getTab(xs: number = -2, xn: number = 2, step: number = 0.2){
    this.xy.clear();
    let y = 0;
    while (xs <= xn){
      y = this.getRecursion(xs);
      this.xy.set(xs, y);
      if (this.LogService){
        this.LogService.write('x=' + xs.toFixed(2) + ' y=' + y.toFixed(4));
      }
      xs = parseFloat((xs + step).toFixed(5));
    }
    return this.xy;
  }
  getRecursion(x: number, mem: number = 1, sum: number = 1, denom: number = 1, min: number = 1e-12): number {
    if (mem <= min) return sum; 
    
    mem = (mem * x * x) / denom;
    return this.getRecursion(x, mem, sum + mem, denom + 1, min);
  }
}

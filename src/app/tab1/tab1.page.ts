import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCardContent, IonCardHeader, IonCardTitle, IonItem, IonInput, IonButton} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { MyHeaderComponent } from "../my-header/my-header.component";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, MyHeaderComponent,
     IonCardContent, IonCardHeader, IonCardTitle, IonInput, IonItem, IonButton],
})
export class Tab1Page {
  constructor() {}
  result: string = "0";
  calculate(a: any, b: any, c: any){
    let an = Number(a);
    let bn = Number(b);
    let cn = Number(c);
    let adig: number = this.getFirstDigit(an);
    let bdig: number = this.getFirstDigit(bn);
    let cdig: number = this.getFirstDigit(cn);
    if (adig % 2 !== 0 && bdig % 2 !== 0 && cdig % 2 !== 0){
      this.result = String(Math.pow(an, 3)+Math.pow(bn, 3)+Math.pow(cn, 3));
    }
    else {
      this.result = "Не у всіх чисел перша цифра непарна";
    }
  }

  getFirstDigit(num: number): number{
    num = Math.floor(Math.abs(num));
    while (num >= 10){
      num = Math.floor(num / 10);
    }
    return num
  }
}

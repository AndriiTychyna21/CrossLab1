import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCardContent, IonCardHeader, IonCardTitle, IonItem, IonInput, IonButton} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { MyHeaderComponent } from "../my-header/my-header.component";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, MyHeaderComponent,
    IonCardContent, IonCardHeader, IonCardTitle, IonInput, IonItem, IonButton],
})
export class Tab2Page {
  constructor() {}

  result: string = "";

  calculate(ainp: any, binp: any) {
    let a: number;
    let b: number;
    try {
      a = Number(ainp);
      b = Number(binp);
    }
    catch {
      this.result = "Будь ласка, введіть числа";
      return;
    }

    if (a >= b) {
      this.result = "Друге число має бути більше за перше";
      return;
    }

    let numbers: string[] = [];
    for (let i = Math.ceil(a); i <= b; i++) {
      if (i % 5 === 1) {
        let divisionResult = Math.floor(i / 5);
        numbers.push(`<li>${i} / 5 = ${divisionResult}, остача 1;</li>`);
      }
    }

    if (numbers.length > 0) {
      this.result = `<ul>${numbers.join("")}</ul>`;
    } else {
      this.result = "<ul><li>Немає чисел, що задовольняють умову</li></ul>";
    }
  }
}




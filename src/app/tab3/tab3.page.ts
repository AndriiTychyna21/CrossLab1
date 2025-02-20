import { Component, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCardContent, IonCardHeader, IonCardTitle, IonItem, IonInput, IonButton, IonGrid, IonRow, IonCol} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { MyHeaderComponent } from "../my-header/my-header.component";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, MyHeaderComponent,
    IonCardContent, IonCardHeader, IonCardTitle, IonInput, IonItem, IonButton, IonGrid, IonRow, IonCol, CommonModule],
})
export class Tab3Page {
  constructor() {}
  matrix: string[][] = [];  
  result: string = "";

  generateMatrix(n: any) {
    let N: number;

    try {
      N = parseInt(n);
      if (isNaN(N) || N <= 0) {
        throw new Error("Невірне число");
      }
    } catch {
      this.result = "Введіть ціле число, більше за 0!";
      return;
    }


    this.matrix = [];
    let diagonalSum = 0;


    for (let i = 0; i < N; i++) {
      this.matrix[i] = [];
      for (let j = 0; j < N; j++) {
        let randomNumber = Math.floor(Math.random() * 100); 
        this.matrix[i].push(randomNumber.toString()); 


        if (i === j) {
          diagonalSum += randomNumber;
        }
      }
    }


    let average = diagonalSum / N;
    this.result = `Середнє арифметичне на головній діагоналі: ${average.toFixed(2)}`;
  }
}


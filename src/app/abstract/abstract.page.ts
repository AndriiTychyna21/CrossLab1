import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonLabel, IonContent, IonCheckbox, IonItem } from '@ionic/angular/standalone';
import { ArchitectureList } from '../architect/architectureList';
import { Architecture } from '../architect/architecure';

@Component({
  selector: 'app-abstract',
  templateUrl: './abstract.page.html',
  styleUrls: ['./abstract.page.scss'],
  standalone: true,
  imports: [
    MyHeaderComponent,
    IonContent,
    CommonModule,
    FormsModule,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonLabel,
    IonCheckbox,
    IonItem
  ]
})
export class AbstractPage implements OnInit {
  archList: ArchitectureList = new ArchitectureList();
  showList: Architecture[] = [];
  JSONUrl: string = "https://api.jsonbin.io/v3/b/67c083d2acd3cb34a8f20d6e";
  filterHighLow: boolean = false; // Статус чекбокса

  constructor() { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    fetch(this.JSONUrl)
      .then(response => response.json())
      .then(data => {
        const items = data.record;
        items.forEach((item: any) => {
          this.archList.addArch(item.type, item.name, item.height, item.yearBuilt, item.length ?? item.numberOfFloors);
        });
        this.filterStructures(); // Фільтруємо після завантаження
      })
      .catch(error => {
        console.error('Error loading data:', error);
      });
  }

  filterStructures() {
    if (this.filterHighLow) {
      const highest = this.archList.archList.reduce((prev, current) => (prev.height > current.height) ? prev : current);
      const lowest = this.archList.archList.reduce((prev, current) => (prev.height < current.height) ? prev : current);
      
      this.showList = [highest, lowest];
    } else {

      this.showList = this.archList.archList;
    }
  }
}

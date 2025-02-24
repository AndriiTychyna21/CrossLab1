import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem } from '@ionic/angular/standalone';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { Schedule } from '../schedule/Schedule';
import { Class } from '../schedule/Class'
import { Chart, registerables } from 'chart.js';
import { LoadingController, AlertController, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonLabel} from '@ionic/angular/standalone'
@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.page.html',
  styleUrls: ['./cloud.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, MyHeaderComponent, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonLabel]
})
export class CloudPage implements OnInit {

  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;
  schedule = new Schedule();
  dataURL = 'https://api.jsonbin.io/v3/b/67bc8d13acd3cb34a8ef0a62';
  loading: any;
  lineChart: any;

  lineChartMethod() {
    if (this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }

    const days = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота', 'Неділя']; // Всі дні тижня
    const classCounts = days.map(day => this.schedule.teacherSchedule.filter(c => c.day === day).length);

    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'bar',
      data: {
        labels: days, // Використовуємо всі дні тижня
        datasets: [{
          label: 'Кількість пар',
          data: classCounts, // Кількість пар для кожного дня
          backgroundColor: 'rgba(54, 162, 235, 0.2)', // Колір стовпців
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true, // Починаємо вісь Y з 0
            ticks: {
                stepSize: 1 // Цілі числа на осі Y
            }
          }
        }
      }
    });
  }

  constructor(
    public loadingController: LoadingController,
    public alertController: AlertController
  ) {
    Chart.register(...registerables);
   }

  ngOnInit() {
    this.loading = true; // Показуємо індикатор завантаження

    fetch(this.dataURL)
      .then(response => response.json())
      .then(data => {
        const records = data.record;
        records.forEach((record: any) => {
          const date = new Date(record.date);
          const newClass = new Class(date, record.day, record.subject, record.group, record.classroom);
          this.schedule.addClass(newClass);
        });
        this.schedule.sort();
        this.lineChartMethod(); // Викликаємо метод для побудови графіку після завантаження даних
        this.loading = false; // Приховуємо індикатор завантаження
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        this.loading = false; // Приховуємо індикатор завантаження навіть у разі помилки
      });
  }

  isKn(c: Class){
    return c.group =="КН-31";
  }
  isKn1(c: Class){
    return c.group =="КН-31/1";
  }
  isKn2(c: Class){
    return c.group =="КН-31/2";
  }
  isKn3(c: Class){
    return c.group =="КН-31/3";
  }
  isAnD(c: Class){
    return c.group == "АнД-31";
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitor-dam',
  templateUrl: './monitor-dam.component.html',
  styleUrls: ['./monitor-dam.component.css']
})
export class MonitorDamComponent implements OnInit {

  
  max: number = 100;
  showWarning: boolean;
  dynamic: number;
  type: string;

  stacked: any[] = [];

  timer: any = null;
  buttonCaption: string = 'Start';

  constructor() {
    this.random();
    this.randomStacked();
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    // console.log(`onDestroy`, this.timer);
  }

  random(): void {
    const value = 100;
    let type: string;

    if (value < 25) {
      type = 'success';
    } else if (value < 50) {
      type = 'info';
    } else if (value < 75) {
      type = 'warning';
    } else {
      type = 'danger';
    }

    this.showWarning = type === 'danger' || type === 'warning';
    this.dynamic = value;
    this.type = type;
  }

  randomStacked(): void {
    const types = ['success', 'info', 'warning', 'danger'];

    this.stacked = [];
    const n = 75;
    for (let i = 0; i < n; i++) {
      const index = Math.floor(Math.random() * 4);
      const value = Math.floor(Math.random() * 27 + 3);
      this.stacked.push({
        value,
        type: types[index],
        label: value + ' %'
      });
    }
  }

  randomize(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    } else {
      this.timer = setInterval(() => this.randomStacked(), 2000);
    }
    this.buttonCaption = this.timer ? 'Stop' : 'Start';
  }

}
import { Component, Input, OnInit } from '@angular/core';

import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { Stock } from '../stock/stock';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  @Input() stock: Stock;

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    const labels: string[] = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
    ];
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45],
        },
      ],
    };

    const config: ChartConfiguration = {
      type: 'line',
      data: data,
      options: {},
    };

    new Chart(<HTMLCanvasElement>document.getElementById('chart'), config);
  }
}

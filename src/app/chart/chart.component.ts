import { Component, Input, OnInit } from '@angular/core';

import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { Stock } from '../stock/stock';
import { StockService } from '../stock/stock.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  stock: Stock;

  constructor(private stockService: StockService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.stockService.findOne('FB').subscribe((stock) => {
      this.stock = stock;

      const labels: string[] = [];
      for (let i = 0; i < this.stock.history.length; i++) {
        labels.push((i + 1).toString());
      }

      const data = {
        labels: labels,
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: this.stock.history,
          },
        ],
      };

      const config: ChartConfiguration = {
        type: 'line',
        data: data,
        options: {},
      };

      new Chart(<HTMLCanvasElement>document.getElementById('chart'), config);
    });
  }
}

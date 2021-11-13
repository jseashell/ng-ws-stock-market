import { Component, Input, OnInit, Output } from '@angular/core';

import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { MarketService } from '../market/market.service';
import { Stock } from '../stock/stock';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  @Output() stock: Stock;
  private chart: Chart = null;
  private range = 100;

  constructor(private marketService: MarketService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.marketService.getMarketUpdate().subscribe((stocks: Stock[]) => {
      this.stock = stocks.filter((stock) => stock.symbol === 'FB')[0];

      if (this.chart !== null) {
        const time =
          (8 + this.stock.minutes / 60).toFixed(0).padStart(2, '0') +
          ':' +
          (this.stock.minutes % 60).toFixed(0).padStart(2, '0');

        if (this.chart.data.labels.length > this.range) {
          this.chart.data.labels.shift();
        }
        this.chart.data.labels.push(time);
        this.chart.data.datasets.forEach((dataset) => {
          if (dataset.data.length > this.range) {
            dataset.data.shift();
          }
          dataset.data.push(this.stock.price);
        });
        this.chart.update();
      } else {
        const data = {
          labels: [],
          datasets: [
            {
              label: this.stock.symbol,
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: [],
            },
          ],
        };

        const config: ChartConfiguration = {
          type: 'line',
          data: data,
          options: {
            animation: false,
            elements: {
              point: {
                radius: 0,
              },
            },
            responsive: true,
          },
        };

        this.chart = new Chart(
          <HTMLCanvasElement>document.getElementById('chart'),
          config
        );
      }
    });
  }
}

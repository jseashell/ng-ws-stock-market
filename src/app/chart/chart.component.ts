import { Component, Input, OnInit } from '@angular/core';

import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { MarketService } from '../market/market.service';
import { Stock } from '../stock/stock';
import { StockService } from '../stock/stock.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  stock: Stock;
  private chart: Chart = null;

  constructor(
    private marketService: MarketService,
    private stockService: StockService
  ) {
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

        this.chart.data.labels.push(time);
        this.chart.data.datasets.forEach((dataset) => {
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
            elements: {
              point: {
                radius: 0,
              },
            },
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

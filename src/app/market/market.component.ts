import { Component, OnInit, Output } from '@angular/core';

import { MarketService } from './market.service';
import { Stock } from '../stock/stock';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css'],
})
export class MarketComponent implements OnInit {
  @Output() stocks: Stock[];

  constructor(private marketService: MarketService) {}

  ngOnInit(): void {
    this.marketService.getMarketUpdate().subscribe((stocks: Stock[]) => {
      this.stocks = stocks;
    });
  }
}

import { Component, OnInit } from '@angular/core';

import { MarketService } from './market/market.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  days: string = '';
  minutes: string = '';

  constructor(private marketService: MarketService) {}

  ngOnInit(): void {}
}

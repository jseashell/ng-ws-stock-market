import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { Stock } from '../stock/stock';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class MarketService {
  socket = io('http://localhost:3002/market');

  public stocks: BehaviorSubject<Stock[]> = new BehaviorSubject([]);

  // this.socket.on('connect', () => {
  //   console.log('Market connected');
  // });

  getMarketUpdate(): Observable<Stock[]> {
    this.socket.on('market-update', (data) => {
      this.stocks.next(data.result);
    });

    return this.stocks.asObservable();
  }

  // this.socket.on('disconnect', () => {
  //   console.log('Market disconnected');
  // });
}

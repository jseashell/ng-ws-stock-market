import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stock } from './stock';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor(private http: HttpClient) {}

  findOne(symbol) {
    return this.http.get<Stock>('http://localhost:3000/stock/' + symbol);
  }
}

export interface Stock {
  symbol: string;
  price: number;
  days: number;
  minutes: number;
  dayChangePercent: number;
  startPrice: number;
  lastPrice: number;
  volatility: number;
}

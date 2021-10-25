import { ChartComponent } from './chart.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StockService } from '../stock/stock.service';

@NgModule({
  declarations: [ChartComponent],
  imports: [CommonModule],
  exports: [ChartComponent],
  providers: [StockService],
})
export class ChartModule {}

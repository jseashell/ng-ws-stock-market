import { CommonModule } from '@angular/common';
import { MarketComponent } from './market.component';
import { MarketService } from './market.service';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [MarketComponent],
  exports: [MarketComponent],
  imports: [CommonModule],
  providers: [MarketService],
})
export class MarketModule {}

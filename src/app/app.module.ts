import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FeedComponent } from './feed/feed.component';
import { FeedService } from './feed/feed.service';
import { MarketComponent } from './market/market.component';
import { MarketService } from './market/market.service';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent, MarketComponent, FeedComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [MarketService, FeedService],
  bootstrap: [AppComponent],
})
export class AppModule {}

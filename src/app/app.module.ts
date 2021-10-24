import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FeedComponent } from './feed/feed.component';
import { FeedService } from './feed/feed.service';
import { MarketComponent } from './market/market.component';
import { MarketModule } from './market/market.module';
import { MarketService } from './market/market.service';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent, FeedComponent],
  imports: [BrowserModule, AppRoutingModule, MarketModule],
  providers: [FeedService],
  bootstrap: [AppComponent],
})
export class AppModule {}

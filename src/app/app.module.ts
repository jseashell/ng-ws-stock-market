import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FeedModule } from './feed/feed.module';
import { MarketModule } from './market/market.module';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FeedModule, MarketModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

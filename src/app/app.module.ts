import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from './chart/chart.module';
import { FeedModule } from './feed/feed.module';
import { HttpClientModule } from '@angular/common/http';
import { MarketModule } from './market/market.module';
import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToolbarModule } from './toolbar/toolbar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ToolbarModule,
    ChartModule,
    FeedModule,
    MarketModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

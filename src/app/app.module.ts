import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ChatComponent } from './chat/chat.component';
import { MarketComponent } from './market/market.component';
import { MarketService } from './market/market.service';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent, MarketComponent, ChatComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [MarketService],
  bootstrap: [AppComponent],
})
export class AppModule {}

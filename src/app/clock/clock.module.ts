import { ClockComponent } from './clock.component';
import { ClockService } from './clock.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ClockComponent],
  providers: [ClockService],
  imports: [CommonModule],
  exports: [ClockComponent],
})
export class ClockModule {}

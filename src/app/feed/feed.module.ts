import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { FeedService } from './feed.service';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [FeedComponent],
  exports: [FeedComponent],
  imports: [CommonModule],
  providers: [FeedService],
})
export class FeedModule {}

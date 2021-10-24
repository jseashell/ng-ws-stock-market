import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { FeedService } from './feed.service';
import { NgModule } from '@angular/core';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [FeedComponent, PostComponent],
  exports: [FeedComponent],
  imports: [CommonModule],
  providers: [FeedService],
})
export class FeedModule {}

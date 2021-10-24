import { Component, OnInit, Output } from '@angular/core';

import { FeedPost } from './feed-post';
import { FeedService } from './feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  @Output() feedPosts: FeedPost[] = [];

  constructor(private feedService: FeedService) {}

  ngOnInit(): void {
    this.feedService.onUpdateFeed().subscribe((feedPost) => {
      this.feedPosts.push(feedPost);
    });
  }
}

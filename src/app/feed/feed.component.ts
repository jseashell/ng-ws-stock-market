import { Component, OnInit, Output } from '@angular/core';

import { FeedService } from './feed.service';
import { Post } from './post/post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  @Output() posts: Post[] = [];

  constructor(private feedService: FeedService) {}

  ngOnInit(): void {
    this.feedService.onUpdateFeed().subscribe((post) => {
      if (this.posts.length > 30) {
        this.posts.shift();
      }
      this.posts.push(post);
    });
  }
}

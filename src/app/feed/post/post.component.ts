import { Component, Input, OnInit, Output } from '@angular/core';

import { Post } from './post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  preview: string = '';

  constructor() {}

  ngOnInit(): void {
    // this.shortenText();
  }

  private shortenText() {
    if (this.post.text.length > 60) {
      this.preview = this.post.text.substring(0, 57);
      this.preview = this.preview.substring(0, this.preview.lastIndexOf(' '));
      this.preview += '...';
    }
  }
}

import { Observable, ReplaySubject } from 'rxjs';

import { Injectable } from '@angular/core';
import { Post } from './post/post';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  socket = io('http://localhost:3001/feed');
  public feedPost: ReplaySubject<Post> = new ReplaySubject<Post>();

  constructor() {
    this.socket.on('connect', () => {
      console.log('Feed connected');
    });

    this.socket.on('disconnect', () => {
      console.log('Feed disconnected');
    });
  }

  onUpdateFeed(): Observable<Post> {
    this.socket.on('update-feed', (data) => {
      this.feedPost.next(data);
    });

    return this.feedPost.asObservable();
  }
}

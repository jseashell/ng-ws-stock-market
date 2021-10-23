import { BehaviorSubject, Observable } from 'rxjs';

import { FeedPost } from './feed-post';
import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  socket = io('http://localhost:3001/feed');
  public feedPost: BehaviorSubject<FeedPost> = new BehaviorSubject({});

  constructor() {
    this.socket.on('connect', () => {
      console.log('Feed connected');
    });

    this.socket.on('disconnect', () => {
      console.log('Feed disconnected');
    });
  }

  onUpdateFeed(): Observable<FeedPost> {
    this.socket.on('update-feed', (data) => {
      this.feedPost.next(data);
    });

    return this.feedPost.asObservable();
  }
}

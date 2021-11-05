import { Observable, ReplaySubject } from 'rxjs';

import { Clock } from './clock';
import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class ClockService {
  socket = io('http://localhost:3003/clock');
  public clock: ReplaySubject<Clock> = new ReplaySubject<Clock>();

  constructor() {
    this.socket.on('connect', () => {
      console.log('Clock connected');
    });

    this.socket.on('disconnect', () => {
      console.log('Clock disconnected');
    });
  }

  onUpdateClock(): Observable<Clock> {
    this.socket.on('update-clock', (data) => {
      this.clock.next(data);
    });

    return this.clock.asObservable();
  }
}

import { Component, OnInit, Output } from '@angular/core';

import { Clock } from './clock';
import { ClockService } from './clock.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent implements OnInit {
  @Output() clock: Clock;

  constructor(private clockService: ClockService) {}

  ngOnInit(): void {
    this.clockService.onUpdateClock().subscribe((clock) => {
      this.clock = clock;
    });
  }
}

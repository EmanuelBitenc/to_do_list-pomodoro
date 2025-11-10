import { Component, computed, signal } from '@angular/core';
import { HeaderPages } from '../../components/header-pages/header-pages';

@Component({
  selector: 'app-pomodoro',
  imports: [HeaderPages],
  templateUrl: './pomodoro.html',
  styleUrl: './pomodoro.css',
})
export class Pomodoro {
  timerMinutes = signal(25);
  timerSeconds = signal(0);
  isRunning = signal(true);

  private intervalId: any = null;

  startPomodoro() {
    if (this.intervalId) return;

    this.isRunning.set(true);
    this.intervalId = setInterval(() => {
      const s = this.timerSeconds();
      const m = this.timerMinutes();

      if (m === 0 && s === 0) {
        this.pausePomodoro();
        return;
      }

      if (s === 0) {
        this.timerMinutes.set(m - 1);
        this.timerSeconds.set(59);
      } else {
        this.timerSeconds.set(s - 1);
      }
    }, 1000);
  }

  resetPomodoro() {
    clearInterval(this.intervalId);
    this.timerMinutes.set(25);
    this.timerSeconds.set(0);
    this.isRunning.set(false);
  }

  pausePomodoro() {
    this.isRunning.set(false);
    if (this.intervalId === null) return;
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
}

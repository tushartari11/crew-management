import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss',
})
export class SignalComponent {
  counter = signal(0);
  username = signal('');
  users = signal(['Tushar', 'Tari']);
  videos = signal({
    title: 'Youtube signal video',
    description: 'Angular signal tutorials',
  });

  setCounter() {
    this.counter.set(30);
  }
  updateCounter() {
    this.counter.update((counter) => counter + 50);
  }

  setVideo() {
    this.videos.set({
      title: 'New Title',
      description: 'New Description',
    });
  }
}

import { AsyncPipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-learning-what-about-rxjs',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './learning-what-about-rxjs.component.html',
  styleUrl: './learning-what-about-rxjs.component.scss',
})
export class LearningWhatAboutRxjsComponent implements OnInit {
  private readonly subscription = new Subscription();
  elementAAfficher = signal('');

  maPromise = new Promise((resolve, reject) => {
    console.info('PROMISE'); // SYNC
    resolve('Tatooine');
  }).then((item) => console.info(`Planete : ${item}`)); // resolve est ASYNC

  // COLD OBSERVABLE
  ships$ = new Observable<string>((subscriber) => {
    //LAZY
    console.info('OBSERVABLE'); // SYNC

    // plus tard
    subscriber.next('Tattooine'); // SYNC // un callback / appelle une fonction parente (en C# dèlégué)

    setTimeout(() => {
      subscriber.next('Coruscant'); // ASYNC
      subscriber.complete(); // SYNC
    }, 1500);
  });

  ngOnInit(): void {
    console.info('INIT');

    //   const subscription = this.ships.subscribe({
    //     next: content => this.elementAAfficher.set(content),
    //     complete: () => console.info('finito')
    //   }
    //   );
    //   this.subscription.add(subscription);
    //   console.info('==> fin init')
  }

  ngOnDestroy(): void {
    console.info('DESTROY');
    this.subscription.unsubscribe();
  }
}

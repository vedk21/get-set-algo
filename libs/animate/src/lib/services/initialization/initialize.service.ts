import { Injectable } from '@angular/core';

import anime from 'animejs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitializeService {

  animationStatus = new Subject<string>();
  animationUpdate = new Subject<string>();

  constructor() { }

  // * Initialize the animation timeline *
  initialize(loop, autoplay, duration, easing) {
    const timeLine = anime.timeline({
      loop: loop,
      autoplay: autoplay,
      duration: duration,
      easing: easing,
      begin: (anim) => {
        this.animationStatus.next('started');
      },
      complete: (anim) => {
        this.animationStatus.next('completed');
      },
      update: (anim) => {
        this.animationUpdate.next(timeLine.progress);
      }
    });

    return timeLine;
  }
}

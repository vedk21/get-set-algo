import { Injectable } from '@angular/core';

import anime from 'animejs';
import { Subject } from 'rxjs';

@Injectable()
export class BubbleSortService {

  animationStatus = new Subject<string>();
  animationUpdate = new Subject<string>();

  createAnimationTimeLine() {
    const bubbleSortAnimationTimeLine = anime.timeline({
      loop: false,
      duration: 3500,
      easing: 'easeOutElastic(1, .8)',
      autoplay: false,
      begin: (anim) => {
        this.animationStatus.next('started');
      },
      complete: (anim) => {
        this.animationStatus.next('completed');
      },
      update: (anim) => {
        this.animationUpdate.next(bubbleSortAnimationTimeLine.progress);
      }
    });

    bubbleSortAnimationTimeLine.add({
      targets: '.example-box .array-element-box.element-1',
      keyframes: [
        {backgroundColor: '#046B69'},
        {translateY: '-4.5em'},
        {translateX: '4.25em'},
        {translateY: 0},
        {backgroundColor: '#79B791'}
      ],
    });

    bubbleSortAnimationTimeLine.add({
      targets: '.example-box .array-element-box.element-2',
      keyframes: [
        {backgroundColor: '#046B69'},
        {translateY: '4.5em'},
        {translateX: '-4.25em'},
        {translateY: 0},
        {backgroundColor: '#79B791'}
      ],
    }, '-=3500');

    bubbleSortAnimationTimeLine.add({
      targets: '.example-box .array-element-box.element-0',
      keyframes: [
        {backgroundColor: '#046B69'},
        {translateY: '-4.5em'},
        {translateX: '12.75em'},
        {translateY: 0},
        {backgroundColor: '#79B791'}
      ],
    });

    bubbleSortAnimationTimeLine.add({
      targets: '.example-box .array-element-box.element-3',
      keyframes: [
        {backgroundColor: '#046B69'},
        {translateY: '4.5em'},
        {translateX: '-12.75em'},
        {translateY: 0},
        {backgroundColor: '#79B791'}
      ],
    }, '-=3500');

    return bubbleSortAnimationTimeLine;
  }
}

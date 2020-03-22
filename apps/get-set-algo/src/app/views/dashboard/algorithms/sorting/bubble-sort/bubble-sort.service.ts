import { Injectable } from '@angular/core';

import anime from 'animejs';
import { Subject } from 'rxjs';
import { HighlightService, InitializeService } from '@get-set-algo/animate';
import { AnimationConfig } from '../../../../../models/animation/animation-config.model';

@Injectable()
export class BubbleSortService {

  bubbleSortAnimationStatus = new Subject<string>();
  bubbleSortAnimationUpdate = new Subject<string>();

  constructor(
    private initializeAnimationService: InitializeService,
    private highlightAnimationService: HighlightService
  ) {
    // * Subscribe to animation events *
    this.animationStatusChangeEvent();
    this.animationProgressUpdateEvent();
  }

  createAnimationTimeLine(animationConfig: AnimationConfig, target1, target2) {

    // * Initialize timeline *
    let bubbleSortAnimationTimeLine = this.initializeAnimationService.initialize(animationConfig.loop, animationConfig.autoplay, animationConfig.duration.timeline, animationConfig.easing);

    // * Highlighting targets *
    bubbleSortAnimationTimeLine = this.highlightAnimationService.highlight(bubbleSortAnimationTimeLine, target1, animationConfig.duration.highlight);

    bubbleSortAnimationTimeLine = this.highlightAnimationService.highlight(bubbleSortAnimationTimeLine, target2, animationConfig.duration.highlight, `-=${animationConfig.duration.highlight}`);
    // * END *

    // * Swapping targets *
    bubbleSortAnimationTimeLine.add({
      targets: target1,
      keyframes: [
        {translateY: '-4.5em'},
        {translateX: '4.25em'},
        {translateY: 0}
      ],
    });

    bubbleSortAnimationTimeLine.add({
      targets: target2,
      keyframes: [
        {translateY: '4.5em'},
        {translateX: '-4.25em'},
        {translateY: 0}
      ],
    }, `-=${animationConfig.duration.timeline}`);
    // * END *

    // * De-highlighting targets *
    bubbleSortAnimationTimeLine = this.highlightAnimationService.de_highlight(bubbleSortAnimationTimeLine, target1, animationConfig.duration.highlight);

    bubbleSortAnimationTimeLine = this.highlightAnimationService.de_highlight(bubbleSortAnimationTimeLine, target2, animationConfig.duration.highlight, `-=${animationConfig.duration.highlight}`);
    // * END *

    return bubbleSortAnimationTimeLine;
  }

  // * animation async events *
  animationStatusChangeEvent() {
    this.initializeAnimationService.animationStatus.subscribe(
      status => {
        this.bubbleSortAnimationStatus.next(status);
      }
    );
  }

  animationProgressUpdateEvent() {
    this.initializeAnimationService.animationUpdate.subscribe(
      progress => {
        this.bubbleSortAnimationUpdate.next(progress);
      }
    );
  }
  // * END *
}

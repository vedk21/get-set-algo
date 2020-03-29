import { Injectable } from '@angular/core';

import anime from 'animejs';
import { Subject } from 'rxjs';
import { HighlightService, InitializeService, SwappingService } from '@get-set-algo/animate';
import { AnimationConfig } from '../../../../../models/animation/animation-config.model';
import { Utilities } from '../../../../../utilities/utilities';
import { AnimationLinearTarget } from '@get-set-algo/animate-lib/models/animation-target.model';

@Injectable()
export class BubbleSortService {

  bubbleSortAnimationStatus = new Subject<string>();
  bubbleSortAnimationUpdate = new Subject<string>();

  constructor(
    private initializeAnimationService: InitializeService,
    private highlightAnimationService: HighlightService,
    private swappingAnimationService: SwappingService
  ) {
    // * Subscribe to animation events *
    this.animationStatusChangeEvent();
    this.animationProgressUpdateEvent();
  }

  createAnimationTimeLine(animationConfig: AnimationConfig, arrayOfElements: number[], arrayOfTargets: AnimationLinearTarget[]) {
    // * Initialize timeline *
    let bubbleSortAnimationTimeLine = this.initializeAnimationService.initialize(animationConfig.loop, animationConfig.autoplay, animationConfig.duration.timeline, animationConfig.easing);
    // * END *

    // implement bubble sort and add animation trigger events accordingly
    for (let i = 0; i < arrayOfElements.length - 1; i++) {
      let isSwapped = false;
      for (let j = i + 1; j < arrayOfElements.length; j++) {
        // * Highlighting targets *
        bubbleSortAnimationTimeLine = this.highlightAnimationService.highlight(bubbleSortAnimationTimeLine, arrayOfTargets[i], animationConfig.duration.highlight);

        bubbleSortAnimationTimeLine = this.highlightAnimationService.highlight(bubbleSortAnimationTimeLine, arrayOfTargets[j], animationConfig.duration.highlight, `-=${animationConfig.duration.highlight}`);
        // * END *
        if (arrayOfElements[i] > arrayOfElements[j]) {
          // * Swapping targets *
          const animationSwappingResult = this.swappingAnimationService.swap(bubbleSortAnimationTimeLine, arrayOfTargets[i], arrayOfTargets[j], i, j, null, `-=${animationConfig.duration.timeline}`);
          bubbleSortAnimationTimeLine = animationSwappingResult['anime'];
          arrayOfTargets[i] = animationSwappingResult['target1'];
          arrayOfTargets[j] = animationSwappingResult['target2'];
          // * END *
          arrayOfElements = Utilities.swap(arrayOfElements, i, j);
          arrayOfTargets = Utilities.swap(arrayOfTargets, i, j);
          isSwapped = true;
        }
        // * De-highlighting targets *
        bubbleSortAnimationTimeLine = this.highlightAnimationService.de_highlight(bubbleSortAnimationTimeLine, arrayOfTargets[i], animationConfig.duration.highlight);

        bubbleSortAnimationTimeLine = this.highlightAnimationService.de_highlight(bubbleSortAnimationTimeLine, arrayOfTargets[j], animationConfig.duration.highlight, `-=${animationConfig.duration.highlight}`);
        // * END *
      }

      if (!isSwapped) {
        break;
      }
    }

    return {
      arrayOfElements,
      bubbleSortAnimationTimeLine
    };
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

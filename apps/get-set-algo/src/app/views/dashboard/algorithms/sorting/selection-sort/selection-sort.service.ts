import { Injectable } from '@angular/core';

import anime from 'animejs';
import { Subject } from 'rxjs';
import { HighlightService, InitializeService, SwappingService } from '@get-set-algo/animate';
import { AnimationConfig } from '../../../../../models/animation/animation-config.model';
import { Utilities } from '../../../../../utilities/utilities';
import { AnimationLinearTarget } from '@get-set-algo/animate-lib/models/animation-target.model';
import { Constants } from '@get-set-algo/animate-lib/config/constants';

@Injectable()
export class SelectionSortService {

  selectionSortAnimationStatus = new Subject<string>();
  selectionSortAnimationUpdate = new Subject<string>();

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
    let selectionSortAnimationTimeLine = this.initializeAnimationService.initialize(animationConfig.loop, animationConfig.autoplay, animationConfig.duration.timeline, animationConfig.easing);
    // * END *

    // implement selection sort and add animation trigger events accordingly
    for (let i = 0; i < arrayOfElements.length; i++) {
      // saving minimum element as first element of new iteration
      let minNumberIndex = i;

      for (let j = i + 1; j < arrayOfElements.length; j++) {
        // * Highlighting targets *
        selectionSortAnimationTimeLine = this.highlightAnimationService.highlight(selectionSortAnimationTimeLine, arrayOfTargets[minNumberIndex], animationConfig.duration.highlight);

        selectionSortAnimationTimeLine = this.highlightAnimationService.highlight(selectionSortAnimationTimeLine, arrayOfTargets[j], animationConfig.duration.highlight, `-=${animationConfig.duration.highlight}`);
        // * END *

        // * De-highlighting targets *
        selectionSortAnimationTimeLine = this.highlightAnimationService.de_highlight(selectionSortAnimationTimeLine, arrayOfTargets[minNumberIndex], animationConfig.duration.highlight);

        selectionSortAnimationTimeLine = this.highlightAnimationService.de_highlight(selectionSortAnimationTimeLine, arrayOfTargets[j], animationConfig.duration.highlight, `-=${animationConfig.duration.highlight}`);
        // * END *

        if (arrayOfElements[j] < arrayOfElements[minNumberIndex]) {
          minNumberIndex = j;
        }
        // * Highlighting min number target *
        selectionSortAnimationTimeLine = this.highlightAnimationService.highlight(selectionSortAnimationTimeLine, arrayOfTargets[minNumberIndex], animationConfig.duration.specialHighlight, `+=${10}`, Constants.ELEMENT_SPECIAL_HIGHLIGHT_COLOR1);
        // * END *

        // * De-highlighting targets *
        selectionSortAnimationTimeLine = this.highlightAnimationService.de_highlight(selectionSortAnimationTimeLine, arrayOfTargets[minNumberIndex], animationConfig.duration.specialHighlight, `-=${50}`);
        // * END *
      }

      // only swap if min_index is not same as we started with
      if (minNumberIndex !== i) {
        // * Highlighting targets *
        selectionSortAnimationTimeLine = this.highlightAnimationService.highlight(selectionSortAnimationTimeLine, arrayOfTargets[minNumberIndex], animationConfig.duration.highlight);

        selectionSortAnimationTimeLine = this.highlightAnimationService.highlight(selectionSortAnimationTimeLine, arrayOfTargets[i], animationConfig.duration.highlight, `-=${animationConfig.duration.highlight}`);
        // * END *


        // * Swapping targets *
        const animationSwappingResult = this.swappingAnimationService.swap(selectionSortAnimationTimeLine, arrayOfTargets[minNumberIndex], arrayOfTargets[i], minNumberIndex, i, null, `-=${animationConfig.duration.timeline}`);
        selectionSortAnimationTimeLine = animationSwappingResult['anime'];
        arrayOfTargets[minNumberIndex] = animationSwappingResult['target1'];
        arrayOfTargets[i] = animationSwappingResult['target2'];
        // * END *

        arrayOfElements = Utilities.swap(arrayOfElements, minNumberIndex, i);
        arrayOfTargets = Utilities.swap(arrayOfTargets, minNumberIndex, i);

        // * De-highlighting targets *
        selectionSortAnimationTimeLine = this.highlightAnimationService.de_highlight(selectionSortAnimationTimeLine, arrayOfTargets[minNumberIndex], animationConfig.duration.highlight);

        selectionSortAnimationTimeLine = this.highlightAnimationService.de_highlight(selectionSortAnimationTimeLine, arrayOfTargets[i], animationConfig.duration.highlight, `-=${animationConfig.duration.highlight}`);
        // * END *
      }
    }

    return {
      arrayOfElements,
      selectionSortAnimationTimeLine
    };
  }

  // * animation async events *
  animationStatusChangeEvent() {
    this.initializeAnimationService.animationStatus.subscribe(
      status => {
        this.selectionSortAnimationStatus.next(status);
      }
    );
  }

  animationProgressUpdateEvent() {
    this.initializeAnimationService.animationUpdate.subscribe(
      progress => {
        this.selectionSortAnimationUpdate.next(progress);
      }
    );
  }
  // * END *
}

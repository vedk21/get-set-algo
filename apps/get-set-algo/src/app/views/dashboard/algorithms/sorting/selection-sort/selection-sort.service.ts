import { Injectable } from '@angular/core';

import anime from 'animejs';
import { Subject } from 'rxjs';
import { HighlightService, InitializeService, SwappingService } from '@get-set-algo/animate';
import { AnimationConfig } from '../../../../../models/animation/animation-config.model';
import { Utilities } from '../../../../../utilities/utilities';
import { AnimationLinearTarget } from '@get-set-algo/animate-lib/models/animation-target.model';

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

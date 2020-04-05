import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import anime from 'animejs';
import { BubbleSortService } from '../../../../../services/algorithm/bubble-sort.service';
import { AnimationConfig } from '../../../../../models/animation/animation-config.model';
import { AnimationLinearTarget } from '@get-set-algo/animate-lib/models/animation-target.model';
import { SelectionSortService } from '@get-set-algo/main-app/services/algorithm/selection-sort.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gsa-algorithm-content',
  templateUrl: './algorithm-content.component.html',
  styleUrls: ['./algorithm-content.component.scss']
})
export class AlgorithmContentComponent implements OnInit, AfterViewInit, OnDestroy {

  // * variables *
  techniqueType;

  // * animation variables *
  array: number[] = [44, 3, 9, 56, 12, 2, 28];
  sortedArray: number[];
  arrayOfTargets: AnimationLinearTarget[] = [];
  animationPlaying = false;

  // * animation subscriptions *
  animationStatusChangeSubscription;
  animationProgressUpdateSubscription;
  
  // * Controls Handlers *
  progressBarControl: HTMLInputElement;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _bubbleSortService: BubbleSortService,
    private _selectionSortService: SelectionSortService
  ) { }

  ngOnInit(): void {
    // get technique type
    this.techniqueType = this.activatedRoute.snapshot.params['technique'];
  }

  ngOnDestroy(): void {
    if (this.animationStatusChangeSubscription) {
      this.animationStatusChangeSubscription.unsubscribe();
    }

    if (this.animationProgressUpdateSubscription) {
      this.animationProgressUpdateSubscription.unsubscribe();
    }
  }

  ngAfterViewInit(): void {
    
    // * Initialize animation configurations *
    const animationConfig: AnimationConfig = {
      loop: false,
      autoplay: false,
      duration: {
        timeline: 2500,
        highlight: 1000,
        specialHighlight: 1200
      },
      easing: 'easeOutElastic(1, .8)'
    };

    // * Initialize targets *
    this.initializeTargets();

    // * Create animation timeline *
    const { arrayOfElements, animationTimeLine } = this.createAnimationTimeLine(animationConfig, this.techniqueType);

    // * Show sorted array *
    this.sortedArray = arrayOfElements;

    // * Add click handlers on buttons *
    this.addButtonControls(animationTimeLine);

    // * Add input handlers on progress bar *
    this.addProgressBarControls(animationTimeLine);

    // * Subscribe to animation events *
    this.algorithmContentAnimationStatusChangeEvent(this.techniqueType);
    this.algorithmContentAnimationProgressUpdateEvent(this.techniqueType);
    
  }

  createAnimationTimeLine(animationConfig, techniqueType) {
    switch (techniqueType) {
      case 'bubble-sort':
        return this._bubbleSortService.createAnimationTimeLine(animationConfig, [...this.array], this.arrayOfTargets);
      case 'selection-sort':
        return this._selectionSortService.createAnimationTimeLine(animationConfig, [...this.array], this.arrayOfTargets);
      default:
        return this._bubbleSortService.createAnimationTimeLine(animationConfig, [...this.array], this.arrayOfTargets);
    }
  }

  // * setup initial state *
  initializeTargets() {
    this.array.forEach((element, index) => {
      const target: AnimationLinearTarget = {
        element: `.example-box .array-element-box.element-${index}`,
        displacement: 0
      }
      this.arrayOfTargets.push(target);
    });
  }
  // * END *

  // * Events to update UI for animation controls *
  playAnimation(event) {
    this.animationPlaying = true;
  }

  pauseAnimation(event) {
    this.animationPlaying = false;
  }

  replayAnimation(event) {
    this.animationPlaying = true;
  }
  // * END *

  // * Select controls and bind events *
  addButtonControls(animationTimeLine) {
    const playButton = document.querySelector('.example-controls .play-btn') as HTMLButtonElement;
    playButton.onclick = animationTimeLine.play;
    const pauseButton = document.querySelector('.example-controls .pause-btn')as HTMLButtonElement;
    pauseButton.onclick = animationTimeLine.pause;
    const replayButton = document.querySelector('.example-controls .replay-btn') as HTMLButtonElement;
    replayButton.onclick = animationTimeLine.restart;
  }

  addProgressBarControls(animationTimeLine) {
    // * get progress bar handler *
    this.progressBarControl = document.querySelector('.example-controls .animation-progress-bar') as HTMLInputElement;

    this.progressBarControl.addEventListener('input', () => {
      animationTimeLine.seek(animationTimeLine.duration * (Number(this.progressBarControl.value) / 100));
    });
  }
  // * END *

  // * animation async events *
  algorithmContentAnimationStatusChangeEvent(techniqueType) {
    switch (techniqueType) {
      case 'bubble-sort':
        this.bubbleSortAnimationStatusChangeEvent();
        break;
      case 'selection-sort':
        this.selectionSortAnimationStatusChangeEvent();
        break;
    }
  }

  algorithmContentAnimationProgressUpdateEvent(techniqueType) {
    switch (techniqueType) {
      case 'bubble-sort':
        this.bubbleSortAnimationProgressUpdateEvent();
        break;
      case 'selection-sort':
        this.selectionSortAnimationProgressUpdateEvent();
        break;
    }
  }

  // * Specific technique animation aync events *
  bubbleSortAnimationStatusChangeEvent() {
    this.animationStatusChangeSubscription = this._bubbleSortService.bubbleSortAnimationStatus.subscribe(
      status => {
        if (status === 'started') {
          this.animationPlaying = true;
        } else {
          this.animationPlaying = false;
        }
      }
    );
  }

  selectionSortAnimationStatusChangeEvent() {
    this.animationStatusChangeSubscription = this._selectionSortService.selectionSortAnimationStatus.subscribe(
      status => {
        if (status === 'started') {
          this.animationPlaying = true;
        } else {
          this.animationPlaying = false;
        }
      }
    );
  }

  bubbleSortAnimationProgressUpdateEvent() {
    this.animationProgressUpdateSubscription = this._bubbleSortService.bubbleSortAnimationUpdate.subscribe(
      progress => {
        this.progressBarControl.value = progress;
      }
    );
  }

  selectionSortAnimationProgressUpdateEvent() {
    this.animationProgressUpdateSubscription = this._bubbleSortService.bubbleSortAnimationUpdate.subscribe(
      progress => {
        this.progressBarControl.value = progress;
      }
    );
  }
  // * END *
  // * END *

}

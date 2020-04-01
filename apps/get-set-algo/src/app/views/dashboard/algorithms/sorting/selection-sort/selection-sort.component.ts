import { Component, OnInit } from '@angular/core';
import { AnimationLinearTarget } from '@get-set-algo/animate-lib/models/animation-target.model';
import { SelectionSortService } from './selection-sort.service';
import { AnimationConfig } from '@get-set-algo/main-app/models/animation/animation-config.model';

@Component({
  selector: 'gsa-selection-sort',
  templateUrl: './selection-sort.component.html',
  styleUrls: ['./selection-sort.component.scss']
})
export class SelectionSortComponent implements OnInit {

  // * variables *
  array: number[] = [55, 89, 90, 76, 88, 67, 88, 78];
  sortedArray: number[];
  arrayOfTargets: AnimationLinearTarget[] = [];
  animationPlaying = false;
  
  // * Controls Handlers *
  progressBarControl: HTMLInputElement;

  constructor(
    private _selectionSortService: SelectionSortService
  ) { }

  ngOnInit(): void {
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
    const { arrayOfElements, selectionSortAnimationTimeLine } = this._selectionSortService.createAnimationTimeLine(animationConfig, [...this.array], this.arrayOfTargets);

    // * Show sorted array *
    this.sortedArray = arrayOfElements;

    // * Add click handlers on buttons *
    this.addButtonControls(selectionSortAnimationTimeLine);

    // * Add input handlers on progress bar *
    this.addProgressBarControls(selectionSortAnimationTimeLine);

    // * Subscribe to animation events *
    this.selectionSortAnimationStatusChangeEvent();
    this.selectionSortAnimationProgressUpdateEvent();
    
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
  addButtonControls(selectionSortAnimationTimeLine) {
    const playButton = document.querySelector('.example-controls .play-btn') as HTMLButtonElement;
    playButton.onclick = selectionSortAnimationTimeLine.play;
    const pauseButton = document.querySelector('.example-controls .pause-btn')as HTMLButtonElement;
    pauseButton.onclick = selectionSortAnimationTimeLine.pause;
    const replayButton = document.querySelector('.example-controls .replay-btn') as HTMLButtonElement;
    replayButton.onclick = selectionSortAnimationTimeLine.restart;
  }

  addProgressBarControls(selectionSortAnimationTimeLine) {
    // * get progress bar handler *
    this.progressBarControl = document.querySelector('.example-controls .animation-progress-bar') as HTMLInputElement;

    this.progressBarControl.addEventListener('input', () => {
      selectionSortAnimationTimeLine.seek(selectionSortAnimationTimeLine.duration * (Number(this.progressBarControl.value) / 100));
    });
  }
  // * END *

  // * animation async events *
  selectionSortAnimationStatusChangeEvent() {
    this._selectionSortService.selectionSortAnimationStatus.subscribe(
      status => {
        if (status === 'started') {
          this.animationPlaying = true;
        } else {
          this.animationPlaying = false;
        }
      }
    );
  }

  selectionSortAnimationProgressUpdateEvent() {
    this._selectionSortService.selectionSortAnimationUpdate.subscribe(
      progress => {
        this.progressBarControl.value = progress;
      }
    );
  }
  // * END *

}

import { Component, OnInit, AfterViewInit } from '@angular/core';
import anime from 'animejs';
import { BubbleSortService } from './bubble-sort.service';
import { AnimationConfig } from '../../../../../models/animation/animation-config.model';

@Component({
  selector: 'gsa-bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.component.scss']
})
export class BubbleSortComponent implements OnInit, AfterViewInit {

  // * variables *
  array = [9, 7, 2, 1];
  animationPlaying = false;
  
  // * Controls Handlers *
  progressBarControl: HTMLInputElement;

  constructor(
    private _bubbleSortService: BubbleSortService
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
        highlight: 1000
      },
      easing: 'easeOutElastic(1, .8)'
    };

    // * Initialize targets *
    const target1 = '.example-box .array-element-box.element-1';
    const target2 = '.example-box .array-element-box.element-2';

    // * Create animation timeline *
    const bubbleSortAnimationTimeLine = this._bubbleSortService.createAnimationTimeLine(animationConfig, target1, target2);

    // * Add click handlers on buttons *
    this.addButtonControls(bubbleSortAnimationTimeLine);

    // * Add input handlers on progress bar *
    this.addProgressBarControls(bubbleSortAnimationTimeLine);

    // * Subscribe to animation events *
    this.bubbleSortAnimationStatusChangeEvent();
    this.bubbleSortAnimationProgressUpdateEvent();
    
  }

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
  addButtonControls(bubbleSortAnimationTimeLine) {
    const playButton = document.querySelector('.example-controls .play-btn') as HTMLButtonElement;
    playButton.onclick = bubbleSortAnimationTimeLine.play;
    const pauseButton = document.querySelector('.example-controls .pause-btn')as HTMLButtonElement;
    pauseButton.onclick = bubbleSortAnimationTimeLine.pause;
    const replayButton = document.querySelector('.example-controls .replay-btn') as HTMLButtonElement;
    replayButton.onclick = bubbleSortAnimationTimeLine.restart;
  }

  addProgressBarControls(bubbleSortAnimationTimeLine) {
    // * get progress bar handler *
    this.progressBarControl = document.querySelector('.example-controls .animation-progress-bar') as HTMLInputElement;

    this.progressBarControl.addEventListener('input', () => {
      bubbleSortAnimationTimeLine.seek(bubbleSortAnimationTimeLine.duration * (Number(this.progressBarControl.value) / 100));
    });
  }
  // * END *

  // * animation async events *
  bubbleSortAnimationStatusChangeEvent() {
    this._bubbleSortService.bubbleSortAnimationStatus.subscribe(
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
    this._bubbleSortService.bubbleSortAnimationUpdate.subscribe(
      progress => {
        this.progressBarControl.value = progress;
      }
    );
  }
  // * END *

}

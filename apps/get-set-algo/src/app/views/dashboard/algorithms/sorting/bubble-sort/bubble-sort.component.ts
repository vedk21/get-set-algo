import { Component, OnInit, AfterViewInit } from '@angular/core';
import anime from 'animejs';
import { BubbleSortService } from './bubble-sort.service';

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

    // * get progress bar handler *
    this.progressBarControl = document.querySelector('.example-controls .animation-progress-bar') as HTMLInputElement;
    
    // * Create animation timeline *
    const bubbleSortAnimationTimeLine = this._bubbleSortService.createAnimationTimeLine();

    // * Add click handlers on buttons *
    this.addButtonControls(bubbleSortAnimationTimeLine);

    // * Add input handlers on progress bar *
    this.addProgressBarControls(bubbleSortAnimationTimeLine);

    // * Subscribe to animation events *
    this.animationStatusChangeEvent();
    this.animationProgressUpdateEvent();
    // * END *
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
    this.progressBarControl.addEventListener('input', () => {
      bubbleSortAnimationTimeLine.seek(bubbleSortAnimationTimeLine.duration * (Number(this.progressBarControl.value) / 100));
    });
  }
  // * END *

  // * animation async events *
  animationStatusChangeEvent() {
    this._bubbleSortService.animationStatus.subscribe(
      status => {
        if (status === 'started') {
          this.animationPlaying = true;
        } else {
          this.animationPlaying = false;
        }
      }
    );
  }

  animationProgressUpdateEvent() {
    this._bubbleSortService.animationUpdate.subscribe(
      progress => {
        this.progressBarControl.value = progress;
      }
    );
  }
  // * END *

}

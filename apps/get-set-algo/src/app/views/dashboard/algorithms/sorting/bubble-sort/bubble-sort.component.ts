import { Component, OnInit, AfterViewInit } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'gsa-bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.component.scss']
})
export class BubbleSortComponent implements OnInit, AfterViewInit {

  // * variables
  array = [9, 7, 2, 1];
  animationPlaying = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    // ! Initialize animejs
    const controlsProgressEl: HTMLInputElement = document.querySelector('.example-controls .animation-progress-bar') as HTMLInputElement;
    // .example-box .array-element-box.element-1
    const frameAnimationTimeline = anime.timeline({
      loop: false,
      duration: 3500,
      easing: 'easeOutElastic(1, .8)',
      autoplay: false,
      begin: (anim) => {
        this.animationPlaying = true;
      },
      complete: (anim) => {
        this.animationPlaying = false;
      },
      update: (anim) => {
        controlsProgressEl.value = frameAnimationTimeline.progress;
      }
    });

    frameAnimationTimeline.add({
      targets: '.example-box .array-element-box.element-1',
      keyframes: [
        {backgroundColor: '#046B69'},
        {translateY: '-4.5em'},
        {translateX: '4.25em'},
        {translateY: 0},
        {backgroundColor: '#79B791'}
      ],
    });

    frameAnimationTimeline.add({
      targets: '.example-box .array-element-box.element-2',
      keyframes: [
        {backgroundColor: '#046B69'},
        {translateY: '4.5em'},
        {translateX: '-4.25em'},
        {translateY: 0},
        {backgroundColor: '#79B791'}
      ],
    }, '-=3500');

    frameAnimationTimeline.add({
      targets: '.example-box .array-element-box.element-0',
      keyframes: [
        {backgroundColor: '#046B69'},
        {translateY: '-4.5em'},
        {translateX: '12.75em'},
        {translateY: 0},
        {backgroundColor: '#79B791'}
      ],
    });

    frameAnimationTimeline.add({
      targets: '.example-box .array-element-box.element-3',
      keyframes: [
        {backgroundColor: '#046B69'},
        {translateY: '4.5em'},
        {translateX: '-12.75em'},
        {translateY: 0},
        {backgroundColor: '#79B791'}
      ],
    }, '-=3500');

    const playButton = document.querySelector('.example-controls .play-btn') as HTMLButtonElement;
    playButton.onclick = frameAnimationTimeline.play;
    const pauseButton = document.querySelector('.example-controls .pause-btn')as HTMLButtonElement;
    pauseButton.onclick = frameAnimationTimeline.pause;
    const replayButton = document.querySelector('.example-controls .replay-btn') as HTMLButtonElement;
    replayButton.onclick = frameAnimationTimeline.restart;

    controlsProgressEl.addEventListener('input', () => {
      frameAnimationTimeline.seek(frameAnimationTimeline.duration * (Number(controlsProgressEl.value) / 100));
    });
  }

  playAnimation(event) {
    this.animationPlaying = true;
  }

  pauseAnimation(event) {
    this.animationPlaying = false;
  }

  replayAnimation(event) {
    this.animationPlaying = true;
  }

}

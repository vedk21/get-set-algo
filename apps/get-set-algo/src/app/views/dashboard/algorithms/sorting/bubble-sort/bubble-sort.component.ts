import { Component, OnInit, AfterViewInit } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'gsa-bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.component.scss']
})
export class BubbleSortComponent implements OnInit, AfterViewInit {

  // * variables
  array = [4, 7, 2, 1];
  array1BoxAnimate;
  array2BoxAnimate;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // ! Initialize animejs
    this.array1BoxAnimate = anime({
      targets: '.example-box .array-element-box.element-1',
      keyframes: [
        {translateY: '-4.5em'},
        {translateX: '4.25em'},
        {translateY: 0}
      ],
      duration: 2000,
      easing: 'easeOutElastic(1, .8)',
      loop: false,
      autoplay: false
    });

    this.array2BoxAnimate = anime({
      targets: '.example-box .array-element-box.element-2',
      keyframes: [
        {translateY: '4.5em'},
        {translateX: '-4.25em'},
        {translateY: 0}
      ],
      duration: 2000,
      easing: 'easeOutElastic(1, .8)',
      loop: false,
      autoplay: false
    });
    setTimeout(() => {
      this.array1BoxAnimate.play();
      this.array2BoxAnimate.play();
    }, 2000);
  }

}

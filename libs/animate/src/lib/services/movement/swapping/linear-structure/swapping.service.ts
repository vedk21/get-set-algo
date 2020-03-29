import { Injectable } from '@angular/core';
import { Constants } from '../../../../config/constants';
import { AnimationLinearTarget } from '../../../../models/animation-target.model';

@Injectable({
  providedIn: 'root'
})
export class SwappingService {

  constructor() { }

  // * Swapping blocks *
  swap(anime, target1: AnimationLinearTarget, target2: AnimationLinearTarget, target1Index: number, target2Index:number, duration?: number, offset?: string) {
    if (duration) {
      anime.add({
        targets: target1.element,
        duration,
        keyframes: [
          { translateY: `-${Constants.ELEMENT_ARRAY_BLOCK_SIZE.HEIGHT}em` },
          { translateX: `${(target1.displacement) + (target2Index - target1Index) * Constants.ELEMENT_ARRAY_BLOCK_SIZE.WIDTH}em` },
          { translateY: 0 }
        ],
      });

      // update displacement for target1
      target1.displacement += (target2Index - target1Index) * Constants.ELEMENT_ARRAY_BLOCK_SIZE.WIDTH;

      anime.add({
        targets: target2.element,
        duration,
        keyframes: [
          { translateY: `${Constants.ELEMENT_ARRAY_BLOCK_SIZE.HEIGHT}em` },
          { translateX: `${(target2.displacement) - (target2Index - target1Index) * Constants.ELEMENT_ARRAY_BLOCK_SIZE.WIDTH}em` },
          { translateY: 0 }
        ],
      }, offset);

      // update displacement for target2
      target2.displacement -= (target2Index - target1Index) * Constants.ELEMENT_ARRAY_BLOCK_SIZE.WIDTH;
    } else {
      anime.add({
        targets: target1.element,
        keyframes: [
          { translateY: `-${Constants.ELEMENT_ARRAY_BLOCK_SIZE.HEIGHT}em` },
          { translateX: `${(target1.displacement) + (target2Index - target1Index) * Constants.ELEMENT_ARRAY_BLOCK_SIZE.WIDTH}em` },
          { translateY: 0 }
        ],
      });

      // update displacement for target1
      target1.displacement += (target2Index - target1Index) * Constants.ELEMENT_ARRAY_BLOCK_SIZE.WIDTH;

      anime.add({
        targets: target2.element,
        keyframes: [
          { translateY: `${Constants.ELEMENT_ARRAY_BLOCK_SIZE.HEIGHT}em` },
          { translateX: `${(target2.displacement) - (target2Index - target1Index) * Constants.ELEMENT_ARRAY_BLOCK_SIZE.WIDTH}em` },
          { translateY: 0 }
        ],
      }, offset);

      // update displacement for target2
      target2.displacement -= (target2Index - target1Index) * Constants.ELEMENT_ARRAY_BLOCK_SIZE.WIDTH;
    }

    return {
      anime,
      target1,
      target2
    };
  }
}

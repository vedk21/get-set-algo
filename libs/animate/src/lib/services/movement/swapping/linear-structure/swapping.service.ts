import { Injectable } from '@angular/core';
import { Constants } from 'libs/animate/src/lib/config/constants';

@Injectable({
  providedIn: 'root'
})
export class SwappingService {

  constructor() { }

  // * Swapping blocks *
  swap(anime, target1: string, target2: string, duration?: number, offset?: string) {
    if (duration) {
      anime.add({
        targets: target1,
        duration,
        keyframes: [
          { translateY: `-${Constants.ELEMENT_ARRAY_BLOCK_SIZE.HEIGHT}` },
          { translateX: Constants.ELEMENT_ARRAY_BLOCK_SIZE.WIDTH },
          { translateY: 0 }
        ],
      });

      anime.add({
        targets: target2,
        duration,
        keyframes: [
          { translateY: Constants.ELEMENT_ARRAY_BLOCK_SIZE.HEIGHT },
          { translateX: `-${Constants.ELEMENT_ARRAY_BLOCK_SIZE.WIDTH}` },
          { translateY: 0 }
        ],
      }, offset);
    } else {
      anime.add({
        targets: target1,
        keyframes: [
          { translateY: `-${Constants.ELEMENT_ARRAY_BLOCK_SIZE.HEIGHT}` },
          { translateX: Constants.ELEMENT_ARRAY_BLOCK_SIZE.WIDTH },
          { translateY: 0 }
        ],
      });

      anime.add({
        targets: target2,
        keyframes: [
          { translateY: Constants.ELEMENT_ARRAY_BLOCK_SIZE.HEIGHT },
          { translateX: `-${Constants.ELEMENT_ARRAY_BLOCK_SIZE.WIDTH}` },
          { translateY: 0 }
        ],
      }, offset);
    }

    return anime;
  }
}

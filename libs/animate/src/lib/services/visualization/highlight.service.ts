import { Injectable } from '@angular/core';
import { Constants } from '../../config/constants';
import { AnimationLinearTarget } from '../../models/animation-target.model';

@Injectable({
  providedIn: 'root'
})
export class HighlightService {

  constructor() { }

  // * Highlight block *
  highlight(anime, target: AnimationLinearTarget, duration?: number, offset?: string) {
    if (duration) {
      anime.add({
        targets: target.element,
        duration,
        backgroundColor: Constants.ELEMENT_HIGHLIGHT_COLOR
      }, offset);
    } else {
      anime.add({
        targets: target.element,
        backgroundColor: Constants.ELEMENT_HIGHLIGHT_COLOR
      }, offset);
    }

    return anime;
  }

  // * De-highlight block *
  de_highlight(anime, target: AnimationLinearTarget, duration?: number, offset?: string) {
    if (duration) {
      anime.add({
        targets: target.element,
        duration,
        backgroundColor: Constants.ELEMENT_ORIGINAL_COLOR
      }, offset);
    } else {
      anime.add({
        targets: target.element,
        backgroundColor: Constants.ELEMENT_ORIGINAL_COLOR
      }, offset);
    }

    return anime;
  }
}

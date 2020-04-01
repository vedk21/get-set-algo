import { Injectable } from '@angular/core';
import { Constants } from '../../config/constants';
import { AnimationLinearTarget } from '../../models/animation-target.model';

@Injectable({
  providedIn: 'root'
})
export class HighlightService {

  constructor() { }

  // * Highlight block *
  highlight(anime, target: AnimationLinearTarget, duration?: number, offset?: string, color?: string) {
    if (duration) {
      anime.add({
        targets: target.element,
        duration,
        backgroundColor: color ? color : Constants.ELEMENT_HIGHLIGHT_COLOR
      }, offset);
    } else {
      anime.add({
        targets: target.element,
        backgroundColor: color ? color : Constants.ELEMENT_HIGHLIGHT_COLOR
      }, offset);
    }

    return anime;
  }

  // * De-highlight block *
  de_highlight(anime, target: AnimationLinearTarget, duration?: number, offset?: string, color?: string) {
    if (duration) {
      anime.add({
        targets: target.element,
        duration,
        backgroundColor: color ? color : Constants.ELEMENT_ORIGINAL_COLOR
      }, offset);
    } else {
      anime.add({
        targets: target.element,
        backgroundColor: color ? color : Constants.ELEMENT_ORIGINAL_COLOR
      }, offset);
    }

    return anime;
  }
}

import { Injectable, Inject } from '@angular/core';
import { WINDOWREF, WindowRef } from './WindowRef';

@Injectable()
export class ScrollupService {
   constructor(@Inject(WINDOWREF) private displayWindow: WindowRef) {}

   ScrollToTop(): void {

        let sTop = ((this.displayWindow.nativeWindow).pageYOffset ||
                    (this.displayWindow.nativeWindow).document.documentElement.scrollTop)
                        - ((this.displayWindow.nativeWindow).document.documentElement.clientTop || 0);
        const _w = this.displayWindow.nativeWindow;

        // animate the scroll up, so we don't need JQUERY at this point.
        const tick = function () {
            sTop = sTop - (sTop / 10);

            if (sTop < 5) {
                sTop = 0;
            } else if (sTop < 10) {
                sTop = sTop - (sTop / 5);
            }
            _w.scrollTo(0, sTop);

            if (sTop >= 10) {
                if (_w.requestAnimationFrame) {
                    _w.requestAnimationFrame(tick);
                } else {
                    _w.setTimeout(tick, 10);
                }
            }
        };
        tick();
    }
}

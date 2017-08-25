import { InjectionToken } from '@angular/core';

function _window(): any {
   // return the global native browser window object
   return window;
}

export class WindowRef {
   get nativeWindow(): any {
      return _window();
   }
}

export let WINDOWREF = new InjectionToken<string>('WindowRef');

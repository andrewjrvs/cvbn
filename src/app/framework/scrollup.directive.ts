import { Directive, ElementRef, OnDestroy, Inject, HostBinding, HostListener, Renderer2 } from '@angular/core';
import { ScrollupService } from './scrollup.service';
import { WINDOWREF, WindowRef } from './windowRef';


@Directive({
     selector: '[appScrollup]'
     })

export class ScrollupDirective implements OnDestroy {
    private scrollListener: Function;
    @HostBinding('class.display')
    private displayScroll = false;

    constructor (private suService: ScrollupService
                    , private el: ElementRef
                    , private render: Renderer2
                    , @Inject(WINDOWREF) private _win: WindowRef) {
        const vm  = this;

        this.scrollListener = this.render.listen('window', 'scroll', (event) => {
    /// <summary>this will hide/show the scroll item based on where we are in the page.</summary>
    const _w = vm._win.nativeWindow, sTop = (_w.pageYOffset || _w.document.documentElement.scrollTop) - (_w.document.documentElement.clientTop || 0), okToDisplay = sTop > 200;
    if (okToDisplay && !vm.displayScroll) {
        // then we need to add the class
        vm.displayScroll = true;
    }
    else if (!okToDisplay && vm.displayScroll) {
        // otherwise remove it.
        vm.displayScroll = false;
    }
});
    }

    @HostListener('click')
    onClick():  void {
        this.suService.ScrollToTop();
    }

    ngOnDestroy(): void {
        this.scrollListener();
    }
}

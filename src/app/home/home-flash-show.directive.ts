import { Directive, ElementRef, OnDestroy, OnInit, HostListener, Renderer2 } from '@angular/core';


interface FSPoint {
    top: number;
    left: number;
}

function parallax_missionText(x: number, y: number, maxX: number, maxY: number): String {
    /// <summary>this will move the mission text around</summary>
    const maxXdeviation = 3
        , maxYdeviation = 3
    ;
    let top = 0
        , left = 0
    ;
    top = ((y * (maxYdeviation) / maxY) - maxYdeviation);
    left = ((x * maxXdeviation / maxX) - maxXdeviation);

    if (top > maxYdeviation) {
        top = maxYdeviation;
    } else if (top < (maxYdeviation * -1)) {
        top = maxYdeviation * -1;
    }

    if (left > maxXdeviation) {
        left = maxXdeviation;
    } else if (left < (maxXdeviation * -1)) {
        left = maxXdeviation * -1;
    }
    return 'matrix(1,0,0,1,' + (left) + ',' + (top) + ')';
}// end function

function paralax_shell(x: number, y: number, maxX: number, maxY: number): String {
    /// <summary>this will move the mission text around</summary>
    const maxXdeviation = 20
        , maxYdeviation = 20
    ;
    let tiltX = 0
        , tiltY = 0
        , degX = 0
        , degY = 0
        , deg = '0deg'
    ;
    degY = (((y * (maxYdeviation) / maxY) - maxYdeviation));
    degX = (((x * (maxXdeviation) / maxX) - maxXdeviation));

    if (degY > maxYdeviation) { degY = maxYdeviation; }
    if (degX > maxXdeviation) { degX = maxXdeviation; }

    if (degY < 0) { degY = degY * -1; }
    if (degX < 0) { degX = degX * -1; }
    deg = (degY > degX ? degY : degX) + 'deg';

    tiltY = degY;
    tiltX = degX;

    if (maxX - x > 0) { tiltX = tiltX * -1; }
    if (maxY - y > 0) { tiltY = tiltY * -1; }

    return 'rotate3d(' + tiltY + ',' + (tiltX * -1) + ',0,' + deg + ')';
}

@Directive({
     selector : '[appFlashyShow]'
})
export class HomeFlashShowDirective implements OnInit, OnDestroy {

    private showText: any;
    private copyText: any;
    private elShell: any;
    private offset: FSPoint = {top: 0, left: 0};

    constructor(private el: ElementRef, private render: Renderer2) {}

    @HostListener('window:mousemove', ['$event'])
    mission_document_mousemove(e?: any): void {
      const {clientX: x, clientY: y} = e;
      let textTransform: String = null
        , bodyTransform: String = null
      ;


        textTransform = parallax_missionText(x, y, this.offset.left, this.offset.top);
        bodyTransform = paralax_shell(x, y, this.offset.left, this.offset.top);
        this.copyText.style.transform = textTransform;
        this.elShell.style.transform = bodyTransform;
    }

    @HostListener('window:resize', ['$event'])
    @HostListener('window:scroll', ['$event'])
    update_parallaxCenter(e?): void {
        const viewportOffset = this.showText.getBoundingClientRect();
        this.offset.top = viewportOffset.top + (viewportOffset.height / 2);
        this.offset.left = viewportOffset.left + (viewportOffset.width / 2);
    }

    ngOnInit(): void {
        this.showText = this.el.nativeElement.querySelector('.screen .mission-text:not(.mission-text-copy)');
        this.copyText = this.el.nativeElement.querySelector('.screen .mission-text.mission-text-copy');
        this.elShell = this.el.nativeElement.querySelector('.shell');
        this.update_parallaxCenter();
    }
    ngOnDestroy(): void {}
}

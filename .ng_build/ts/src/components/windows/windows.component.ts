import {
    Component,
    ViewEncapsulation,
    ContentChildren,
    QueryList,
    AfterContentInit,
    Renderer,
    ElementRef,
} from "@angular/core";

import {
    NgClass
} from "@angular/common";

import { WindowComponent } from "./window/window.component";
import { WBackgroundComponent } from "./wbackground/wbackground.component";

import { Observable } from "rxjs/Rx";

@Component({
    selector: "windows",
    template: `
      <div class="windows">
          <div class="windows-wrapper">
              <ng-content select="window"></ng-content>
          </div>
          <div class="background">
              <ng-content select="wbackground"></ng-content>
          </div>
          <div class="navigation">
              <div class="nav up" (click)="previousWindow()" [class.disabled]="isFirstWindow"><i class="fa fa-angle-up" aria-hidden="true"></i></div>
              <div class="counter">
                  <span class="index">{{_windowIndex + 1}}</span> / <span> {{WindowsLength}}</span>
              </div>
              <div class="nav down" (click)="nextWindow()" [class.disabled]="isLastWindow"><i class="fa fa-angle-down" aria-hidden="true"></i></div>
          </div>
      </div>
    `,
    styles: [`
      windows{display:block;width:100%;height:100vh}windows .windows{display:block;position:relative;width:100%;height:100%}windows .windows .windows-wrapper{display:block;width:100%;height:100%;position:relative;overflow:hidden}windows .windows .background{display:block;position:absolute;top:0;left:0;bottom:0;right:0}windows .windows .navigation{position:absolute;display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-ms-flex-align:center;-webkit-box-align:center;align-items:center;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);right:20px;z-index:14;font-size:2rem;color:#f7f7f9;text-shadow:1px 1px 3px rgba(0,0,0,.4)}windows .windows .navigation .nav{cursor:pointer;margin:15px 0;-webkit-transition:color .28s linear;transition:color .28s linear}windows .windows .navigation .nav.disabled{color:rgba(0,0,0,.12)}windows .windows .navigation .nav:active{color:#36f}windows .windows .navigation .counter{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-align:center;-webkit-box-align:center;align-items:center;font-size:.7rem;color:#f7f7f9;margin-top:10px;margin-bottom:10px;cursor:initial}windows .windows .navigation .counter .index{font-size:.9rem;color:#36f}
    `],
    encapsulation: ViewEncapsulation.None,
})
export class WindowsComponent implements AfterContentInit {
    private _windowIndex: number = 0;
    private _totalWindows: number = 0;

    private _keydownObserver: any;
    private _scrollObserver: any;

    @ContentChildren(WindowComponent) windows: QueryList<WindowComponent>;

    constructor(private _renderer: Renderer, private _element: ElementRef) {
    }


    public get WindowsLength(): number {
        return this.windows.length;
    }


    public get isFirstWindow(): boolean {
        return this._windowIndex == 0;
    }


    public get isLastWindow(): boolean {
        return this._windowIndex == this._totalWindows - 1;
    }




    ngAfterContentInit() {
        this.windows.forEach(window => {
            window.hide();
        });

        this.windows.toArray()[0].show();
        this.windows.toArray()[0].down();
        this.windows.toArray()[0].active();

        this._keydownObserver = Observable.fromEvent(document, 'keydown').debounceTime(300);

        this._keydownObserver.subscribe((e) => {
            if (e.keyCode === 38) {
                this.previousWindow();
            } else if (e.keyCode === 40) {
                this.nextWindow();
            }
        });

        this._scrollObserver = Observable.fromEvent(this._element.nativeElement, 'wheel').debounceTime(300);

        this._scrollObserver.subscribe((e: WheelEvent) => {

            // cross-browser wheel delta
            let delta = Math.max(-1, Math.min(1, (e.deltaY || -e.detail)));

            if (delta < 0) {
                //scrolled up
                this.previousWindow();
            } else if (delta > 0) {
                //scrolled down.
                this.nextWindow();
            }
        });

        this._totalWindows = this.windows.length;
    }

    nextWindow() {
        if (this._windowIndex == (this.windows.length - 1)) return;
        this.windows.toArray()[this._windowIndex].up();
        this.windows.toArray()[++this._windowIndex].active();
    }

    previousWindow() {

        if (this._windowIndex == 0) return;
        this.windows.toArray()[this._windowIndex].down();
        this.windows.toArray()[--this._windowIndex].active();
    }
}

export const WINDOW_COMPONENT_DIRECTIVES = [WindowsComponent, WindowComponent, WBackgroundComponent];
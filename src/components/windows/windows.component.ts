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
    templateUrl: "./windows.component.html",
    styleUrls: ["./windows.component.css"],
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
import { QueryList, AfterContentInit, Renderer, ElementRef } from "@angular/core";
import { WindowComponent } from "./window/window.component";
import { WBackgroundComponent } from "./wbackground/wbackground.component";
export declare class WindowsComponent implements AfterContentInit {
    private _renderer;
    private _element;
    private _windowIndex;
    private _totalWindows;
    private _keydownObserver;
    private _scrollObserver;
    windows: QueryList<WindowComponent>;
    constructor(_renderer: Renderer, _element: ElementRef);
    readonly WindowsLength: number;
    readonly isFirstWindow: boolean;
    readonly isLastWindow: boolean;
    ngAfterContentInit(): void;
    nextWindow(): void;
    previousWindow(): void;
}
export declare const WINDOW_COMPONENT_DIRECTIVES: (typeof WindowComponent | typeof WBackgroundComponent | typeof WindowsComponent)[];

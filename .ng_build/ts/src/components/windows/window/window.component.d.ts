import { Renderer2, ElementRef } from "@angular/core";
export declare class WindowComponent {
    private _renderer;
    private _element;
    windowState: string;
    constructor(_renderer: Renderer2, _element: ElementRef);
    onClick(): void;
    hide(): void;
    show(): void;
    up(): void;
    down(): void;
    active(): void;
}

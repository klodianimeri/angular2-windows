import {
    Component,
    ViewEncapsulation,
    Renderer2,
    ElementRef,
} from "@angular/core";

import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    selector: "window",
    templateUrl: "./window.component.html",
    styleUrls: ["./window.component.css"],
    encapsulation: ViewEncapsulation.None,
    host: {
        '(click)': 'onClick()'
    },
    animations: [
        trigger("WindowState", [
            state('active', style({
                transform: "translateY(0)"
            })),
            state('up', style({
                transform: "translateY(-100%)"
            })),
            state('down', style({
                transform: "translateY(100%)"
            })),
            transition('up <=> active', animate('620ms cubic-bezier(0.455, 0.03, 0.515, 0.955)')),
            transition('down <=> active', animate('620ms cubic-bezier(0.455, 0.03, 0.515, 0.955)'))
        ])
    ]
})
export class WindowComponent {
    public windowState: string = "down";

    constructor(private _renderer: Renderer2, private _element: ElementRef) {
    }

    onClick() {
    }

    hide() {
        this._renderer.setStyle(this._element.nativeElement, "z-index", "2");
        // this._renderer.
    }

    show() {
        this._renderer.setStyle(this._element.nativeElement, "z-index", "3");
    }

    up() {
        this.windowState = "up";
        this.hide();
    }

    down() {
        this.windowState = "down";
        this.hide();
    }

    active() {
        this.windowState = "active";
        this.show();
    }
}
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
    template: `
      <div class="window" [@WindowState]="windowState">
          <ng-content></ng-content>
      </div>
    `,
    styles: [`
      window{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-ms-flex:1;-webkit-box-flex:1;flex:1;position:absolute;top:0;left:0;bottom:0;right:0;z-index:2}window .window{display:block;position:absolute;top:0;left:0;bottom:0;right:0;overflow:hidden}
    `],
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
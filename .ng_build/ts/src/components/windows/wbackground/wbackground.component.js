import { Component, ViewEncapsulation, } from '@angular/core';
export class WBackgroundComponent {
}
WBackgroundComponent.decorators = [
    { type: Component, args: [{
                selector: "wbackground",
                template: `
      <ng-content></ng-content>
    `,
                styles: [`
      wbackground{display:block;width:100%;height:100%;position:relative;overflow:hidden}
    `],
                encapsulation: ViewEncapsulation.None
            },] },
];
/**
 * @nocollapse
 */
WBackgroundComponent.ctorParameters = () => [];
function WBackgroundComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    WBackgroundComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    WBackgroundComponent.ctorParameters;
}
//# sourceMappingURL=wbackground.component.js.map
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WindowsComponent } from './windows.component';
import { WindowComponent } from './window/window.component';
import { WBackgroundComponent } from './wbackground/wbackground.component';
export class WindowsModule {
}
WindowsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    WindowsComponent,
                    WindowComponent,
                    WBackgroundComponent
                ],
                imports: [
                    BrowserModule
                ],
                exports: [
                    WindowsComponent,
                    WindowComponent,
                    WBackgroundComponent
                ],
                providers: [],
            },] },
];
/**
 * @nocollapse
 */
WindowsModule.ctorParameters = () => [];
function WindowsModule_tsickle_Closure_declarations() {
    /** @type {?} */
    WindowsModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    WindowsModule.ctorParameters;
}
//# sourceMappingURL=windows.module.js.map
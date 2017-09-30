import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';

import { WindowsComponent } from "./windows.component";
import { WindowComponent } from "./window/window.component";
import { WBackgroundComponent } from "./wbackground/wbackground.component";

@NgModule({
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
})
export class WindowsModule { }
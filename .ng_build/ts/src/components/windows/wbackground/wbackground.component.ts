import {
    Component,
    ViewEncapsulation,
    Renderer,
    ElementRef,
} from "@angular/core";


@Component({
    selector: "wbackground",
    template: `
      <ng-content></ng-content>
    `,
    styles: [`
      wbackground{display:block;width:100%;height:100%;position:relative;overflow:hidden}
    `],
    encapsulation: ViewEncapsulation.None
})
export class WBackgroundComponent { }
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var WindowComponent = (function () {
    function WindowComponent(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
        this.WindowState = "down";
    }
    WindowComponent.prototype.onClick = function () {
    };
    WindowComponent.prototype.hide = function () {
        this._renderer.setElementStyle(this._element.nativeElement, "z-index", "2");
    };
    WindowComponent.prototype.show = function () {
        this._renderer.setElementStyle(this._element.nativeElement, "z-index", "3");
    };
    WindowComponent.prototype.up = function () {
        this.WindowState = "up";
        this.hide();
    };
    WindowComponent.prototype.down = function () {
        this.WindowState = "down";
        this.hide();
    };
    WindowComponent.prototype.active = function () {
        this.WindowState = "active";
        this.show();
    };
    WindowComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "window",
            templateUrl: "./window.component.html",
            styleUrls: ["./window.component.css"],
            encapsulation: core_1.ViewEncapsulation.None,
            host: {
                '(click)': 'onClick()'
            },
            animations: [
                core_1.trigger("WindowState", [
                    core_1.state('active', core_1.style({
                        top: 0,
                        bottom: 0,
                    })),
                    core_1.state('up', core_1.style({
                        top: 0,
                        bottom: "100%",
                    })),
                    core_1.state('down', core_1.style({
                        top: "100%",
                        bottom: 0,
                    })),
                    core_1.transition('up <=> active', core_1.animate('400ms ease-out')),
                    core_1.transition('down <=> active', core_1.animate('400ms ease-out'))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
    ], WindowComponent);
    return WindowComponent;
}());
exports.WindowComponent = WindowComponent;
//# sourceMappingURL=window.component.js.map
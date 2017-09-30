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
var common_1 = require("@angular/common");
var window_component_1 = require("./window/window.component");
var wbackground_component_1 = require("./wbackground/wbackground.component");
var Rx_1 = require("rxjs/Rx");
var WindowsComponent = (function () {
    function WindowsComponent(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
        this._windowIndex = 0;
        this._totalWindows = 0;
    }
    Object.defineProperty(WindowsComponent.prototype, "WindowsLength", {
        get: function () {
            return this.windows.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowsComponent.prototype, "isFirstWindow", {
        get: function () {
            return this._windowIndex == 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowsComponent.prototype, "isLastWindow", {
        get: function () {
            return this._windowIndex == this._totalWindows - 1;
        },
        enumerable: true,
        configurable: true
    });
    WindowsComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.windows.forEach(function (window) {
            window.hide();
        });
        this.windows.toArray()[0].show();
        this.windows.toArray()[0].down();
        this.windows.toArray()[0].active();
        this._keydownObserver = Rx_1.Observable.fromEvent(document, 'keydown').debounceTime(300);
        this._keydownObserver.subscribe(function (e) {
            if (e.keyCode === 38) {
                _this.previousWindow();
            }
            else if (e.keyCode === 40) {
                _this.nextWindow();
            }
        });
        this._scrollObserver = Rx_1.Observable.fromEvent(this._element.nativeElement, 'wheel').debounceTime(300);
        this._scrollObserver.subscribe(function (e) {
            // cross-browser wheel delta
            var delta = Math.max(-1, Math.min(1, (e.deltaY || -e.detail)));
            if (delta < 0) {
                //scrolled up
                _this.previousWindow();
            }
            else if (delta > 0) {
                //scrolled down.
                _this.nextWindow();
            }
        });
        this._totalWindows = this.windows.length;
    };
    WindowsComponent.prototype.nextWindow = function () {
        if (this._windowIndex == (this.windows.length - 1))
            return;
        this.windows.toArray()[this._windowIndex].up();
        this.windows.toArray()[++this._windowIndex].active();
    };
    WindowsComponent.prototype.previousWindow = function () {
        if (this._windowIndex == 0)
            return;
        this.windows.toArray()[this._windowIndex].down();
        this.windows.toArray()[--this._windowIndex].active();
    };
    __decorate([
        core_1.ContentChildren(window_component_1.WindowComponent), 
        __metadata('design:type', core_1.QueryList)
    ], WindowsComponent.prototype, "windows", void 0);
    WindowsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "windows",
            templateUrl: "./windows.component.html",
            styleUrls: ["./windows.component.css"],
            encapsulation: core_1.ViewEncapsulation.None,
            directives: [common_1.NgClass]
        }), 
        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
    ], WindowsComponent);
    return WindowsComponent;
}());
exports.WindowsComponent = WindowsComponent;
exports.WINDOW_COMPONENT_DIRECTIVES = [WindowsComponent, window_component_1.WindowComponent, wbackground_component_1.WBackgroundComponent];
//# sourceMappingURL=windows.component.js.map
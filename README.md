
# Angular 2 windows

A minimalistic angular 2 one page scroller.

## Import this module to your angular app

```js
import { WindowsModule } from "angular2-windows";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    WindowsModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
```

## Angular 2 Windows

Add this piece of code inside a wrapper that has a width and height of 100%.

```html
<windows>
    <window>
        <!--Window Content-->
        <div style="width:100%;height:100%;background-color:brown;font-size:22rem;">
            First page.
        </div>
    </window>
    <window>
        <!--Window Content-->
        <div style="width:100%;height:100%;background-color:green;font-size:22rem;">
            Second page.
        </div>
    </window>
    <window>
        <!--Window Content-->
        <div style="width:100%;height:100%;background-color:blue;font-size:22rem;">
            Third page.
        </div>
    </window>
    <window>
        <!--Window Content-->
        <div style="width:100%;height:100%;background-color:yellow;font-size:22rem;">
            Fourth page
        </div>
    </window>
    ...
</windows>
```

You can keep the windows transparent and put a fixed background.

```html
<windows>
    <window>
        <!--Window Content-->
        <div style="width:100%;height:100%;background-color:brown;font-size:22rem;">
            First page.
        </div>
    </window>
    <wbackground>
        <!--Window background content-->
    </wbackground>
    ...
</windows>
```
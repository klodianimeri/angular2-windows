import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <windows>
        <window>
            <div style="width:100%;height:100%;background-color:brown;font-size:22rem;">
                We are BIG.
            </div>
        </window>
        <window>
            <div style="width:100%;height:100%;background-color:green;font-size:22rem;">
                We are Junior Mafia.
            </div>
        </window>
        <window>
            <div style="width:100%;height:100%;background-color:blue;font-size:22rem;">
                Who shot yo.
            </div>
        </window>
        <window>
            <div style="width:100%;height:100%;background-color:yellow;font-size:22rem;">
                Party and bullshit.
            </div>
        </window>
    </windows>
  `,
  styles: [`
    :host {
        display: block;
        height: 100vh;
    }
  `]
})
export class AppComponent {
  constructor() {

  }
}


import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'lib-my-lib',
  standalone: true,
  imports: [ButtonModule, InputTextModule],
  template: `<p-button label="Click Me"></p-button>
    <input pInputText type="text" placeholder="Enter text" />`,
  styles: ``,
})
export class MyLibComponent {}

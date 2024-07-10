import { Component } from '@angular/core';

@Component({
  selector: 'app-shell',
  standalone: false,
  template: `
  <div>
    <div>
        <div>{{title}}</div>
        <router-outlet></router-outlet>
    </div>
  </div>
  `,
  styleUrl: './shell.component.scss'
})
export class ShellComponent {
  title:string = 'Champions';

}

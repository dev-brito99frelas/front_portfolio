import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <div class="template-grid">

    <div class="header-igrid">
      <app-header></app-header>
    </div>
    <div class="nav-igrid">
      <app-nav></app-nav>
    </div>

    <div class="content-igrid">
      <router-outlet></router-outlet>
    </div>

    <div class="footer-igrid">
      <app-footer></app-footer>
    </div>

  </div>

  `,
})
export class AppComponent {
}

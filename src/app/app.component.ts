import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './layout/footer.component';
import { HeaderComponent } from './layout/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <a
      class="focus-ring fixed left-4 top-4 z-50 -translate-y-20 rounded-full bg-signal-400 px-4 py-2 text-sm font-bold text-white transition focus:translate-y-0"
      href="#main-content"
    >
      Skip to content
    </a>

    <app-header />

    <main id="main-content" class="min-h-screen">
      <router-outlet />
    </main>

    <app-footer />
  `
})
export class AppComponent {}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { profile } from '../data/portfolio.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="border-t border-[var(--panel-border)] bg-[color-mix(in_srgb,var(--page-bg)_86%,transparent)]">
      <div class="section-shell grid gap-8 py-12 lg:grid-cols-[1.1fr_0.9fr_0.8fr]">
        <div>
          <a routerLink="/" class="focus-ring inline-flex rounded-lg font-display text-xl font-extrabold text-primary">
            {{ profile.name }}
          </a>
          <p class="mt-3 max-w-xl text-sm leading-7 text-secondary">
            Backend developer in Belgrade, Serbia building maintainable .NET APIs, relational data models, and clean web application foundations.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <p class="text-sm font-black uppercase tracking-[0.24em] accent-text">Explore</p>
          <div class="mt-4 grid grid-cols-2 gap-3 text-sm font-bold text-secondary">
            <a routerLink="/" class="focus-ring rounded-lg transition hover:text-primary">Home</a>
            <a routerLink="/about" class="focus-ring rounded-lg transition hover:text-primary">About</a>
            <a routerLink="/skills" class="focus-ring rounded-lg transition hover:text-primary">Skills</a>
            <a routerLink="/projects" class="focus-ring rounded-lg transition hover:text-primary">Projects</a>
            <a routerLink="/contact" class="focus-ring rounded-lg transition hover:text-primary">Contact</a>
          </div>
        </nav>

        <div>
          <p class="text-sm font-black uppercase tracking-[0.24em] accent-text">Connect</p>
          <div class="mt-4 flex flex-wrap gap-3">
            <a
              [href]="profile.github"
              target="_blank"
              rel="noreferrer"
              class="focus-ring btn-secondary px-4 py-2 text-sm"
            >
              GitHub
            </a>
            <a
              [href]="profile.linkedin"
              target="_blank"
              rel="noreferrer"
              class="focus-ring btn-secondary px-4 py-2 text-sm"
            >
              LinkedIn
            </a>
            <a
              [href]="'mailto:' + profile.email"
              class="focus-ring btn-secondary px-4 py-2 text-sm"
            >
              Email
            </a>
          </div>
        </div>
      </div>

      <div class="section-shell flex flex-col justify-between gap-3 border-t border-[var(--panel-border)] py-5 text-sm text-muted sm:flex-row">
        <p>© 2026 {{ profile.name }}. All rights reserved.</p>
        
      </div>
    </footer>
  `
})
export class FooterComponent {
  protected readonly profile = profile;
}

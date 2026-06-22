import { NgClass } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../core/theme.service';
import { profile } from '../data/portfolio.data';

interface NavItem {
  label: string;
  path: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive],
  template: `
    <header class="fixed inset-x-0 top-0 z-40 border-b border-[var(--panel-border)] bg-[color-mix(in_srgb,var(--page-bg)_82%,transparent)] backdrop-blur-2xl">
      <nav class="section-shell flex h-[4.5rem] items-center justify-between py-3" aria-label="Primary navigation">
        <a
          routerLink="/"
          class="focus-ring group flex items-center gap-3 rounded-2xl"
          aria-label="Nikola Sajic home"
          (click)="closeMenu()"
        >
          <span class="relative grid size-11 place-items-center overflow-hidden rounded-2xl border border-[var(--panel-border)] bg-[var(--panel-soft)] font-display text-sm font-extrabold text-primary shadow-cyan">
            <span class="absolute inset-0 bg-gradient-to-br from-signal-400/25 via-transparent to-electric-400/20"></span>
            <span class="relative">NS</span>
          </span>
          <span class="hidden leading-tight sm:block">
            <span class="block font-display text-sm font-extrabold text-primary">{{ profile.name }}</span>
            <span class="block text-xs text-muted">{{ profile.role }}</span>
          </span>
        </a>

        <div class="hidden items-center gap-1 rounded-full border border-[var(--panel-border)] bg-[var(--panel-soft)] p-1 md:flex">
          @for (item of navItems; track item.path) {
            <a
              [routerLink]="item.path"
              routerLinkActive="bg-signal-400 text-white shadow-cyan"
              [routerLinkActiveOptions]="{ exact: item.path === '/' }"
              class="focus-ring rounded-full px-4 py-2 text-sm font-bold text-secondary transition hover:text-primary"
            >
              {{ item.label }}
            </a>
          }
        </div>

        <div class="flex items-center gap-2">
          <button
            type="button"
            class="focus-ring group relative inline-flex h-11 w-[5.25rem] items-center rounded-full border border-[var(--panel-border)] bg-[var(--panel-soft)] p-1 transition hover:border-signal-400/60"
            [attr.aria-label]="theme.label()"
            [attr.title]="theme.label()"
            (click)="theme.toggle()"
          >
            <span
              class="absolute left-2 text-xs font-black transition"
              [ngClass]="theme.isLight() ? 'text-muted' : 'text-white'"
              aria-hidden="true"
            >
              D
            </span>
            <span
              class="absolute right-2 text-xs font-black transition"
              [ngClass]="theme.isLight() ? 'text-white' : 'text-muted'"
              aria-hidden="true"
            >
              L
            </span>
            <span
              class="relative grid size-9 place-items-center rounded-full bg-gradient-to-br from-signal-400 to-blue-700 text-white shadow-cyan transition-transform duration-300"
              [ngClass]="theme.isLight() ? 'translate-x-[2.35rem]' : 'translate-x-0'"
              aria-hidden="true"
            >
              <span class="size-3 rounded-full bg-white/90 shadow-[0_0_18px_rgba(255,255,255,0.8)]"></span>
            </span>
          </button>

          <a
            routerLink="/contact"
            class="focus-ring btn-primary hidden px-4 py-2 text-sm lg:inline-flex"
          >
            Hire me
          </a>

          <button
            type="button"
            class="focus-ring inline-flex size-11 items-center justify-center rounded-full border border-[var(--panel-border)] bg-[var(--panel-soft)] text-primary md:hidden"
            [attr.aria-expanded]="menuOpen()"
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            (click)="toggleMenu()"
          >
            <span class="relative block h-4 w-5" aria-hidden="true">
              <span
                class="absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition"
                [ngClass]="{ 'translate-y-[7px] rotate-45': menuOpen() }"
              ></span>
              <span
                class="absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition"
                [ngClass]="{ 'opacity-0': menuOpen() }"
              ></span>
              <span
                class="absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-current transition"
                [ngClass]="{ '-translate-y-[7px] -rotate-45': menuOpen() }"
              ></span>
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        class="overflow-hidden border-[var(--panel-border)] bg-[var(--panel-strong)] shadow-2xl transition-[max-height,border-width] duration-300 md:hidden"
        [ngClass]="menuOpen() ? 'max-h-96 border-t' : 'max-h-0 border-t-0'"
      >
        <div class="section-shell grid gap-2 py-4">
          @for (item of navItems; track item.path) {
            <a
              [routerLink]="item.path"
              routerLinkActive="bg-signal-400 text-white"
              [routerLinkActiveOptions]="{ exact: item.path === '/' }"
              class="focus-ring rounded-2xl px-4 py-3 text-sm font-bold text-secondary transition hover:bg-[var(--accent-soft)] hover:text-primary"
              (click)="closeMenu()"
            >
              {{ item.label }}
            </a>
          }
          <a
            routerLink="/contact"
            class="focus-ring btn-primary mt-2 px-5 py-3 text-sm"
            (click)="closeMenu()"
          >
            Start a conversation
          </a>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {
  protected readonly profile = profile;
  protected readonly theme = inject(ThemeService);
  protected readonly menuOpen = signal(false);
  protected readonly navItems: NavItem[] = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' }
  ];

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('window:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }
}

import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';

export type ThemeMode = 'dark' | 'light';

const STORAGE_KEY = 'nikola-portfolio-theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly mode = signal<ThemeMode>('dark');

  readonly theme = this.mode.asReadonly();
  readonly isLight = computed(() => this.mode() === 'light');
  readonly label = computed(() => (this.isLight() ? 'Switch to dark theme' : 'Switch to light theme'));

  constructor() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const savedTheme = window.localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    this.setTheme(savedTheme === 'light' ? 'light' : 'dark', false);
  }

  toggle(): void {
    this.setTheme(this.mode() === 'light' ? 'dark' : 'light');
  }

  setTheme(mode: ThemeMode, persist = true): void {
    this.mode.set(mode);
    this.document.documentElement.dataset['theme'] = mode;
    this.document.documentElement.classList.toggle('theme-light', mode === 'light');

    if (persist && isPlatformBrowser(this.platformId)) {
      window.localStorage.setItem(STORAGE_KEY, mode);
    }
  }
}

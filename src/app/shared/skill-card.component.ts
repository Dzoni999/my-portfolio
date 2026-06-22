import { Component, Input } from '@angular/core';
import { RevealDirective } from '../core/reveal.directive';
import { SkillGroup } from '../data/portfolio.data';

@Component({
  selector: 'app-skill-card',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <article
      appReveal
      class="group glass-panel relative h-full overflow-hidden rounded-[1.75rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-signal-400/50 hover:shadow-glow"
    >
      <div class="absolute -right-10 -top-10 size-32 rounded-full bg-signal-400/12 blur-2xl transition group-hover:bg-electric-400/18"></div>
      <div class="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-signal-400/60 to-transparent opacity-70"></div>

      <div class="relative">
        <div class="flex items-start justify-between gap-4">
          <div>
            <p class="text-xs font-black uppercase tracking-[0.24em] accent-text">{{ group.eyebrow }}</p>
            <h3 class="mt-3 font-display text-2xl font-extrabold text-primary">{{ group.category }}</h3>
          </div>
          <span class="rounded-2xl border border-[var(--panel-border)] bg-[var(--accent-soft)] px-3 py-2 font-mono text-sm font-black accent-text">
            {{ group.accent }}
          </span>
        </div>

        <p class="mt-4 min-h-20 text-sm leading-7 text-secondary">{{ group.description }}</p>

        <div class="mt-6 grid gap-4">
          @for (skill of group.skills; track skill.name) {
            <div>
              <div class="mb-2 flex items-center justify-between gap-3">
                <span class="text-sm font-bold text-primary">{{ skill.name }}</span>
                <span class="font-mono text-xs font-bold text-muted">{{ skill.level }}%</span>
              </div>
              <div class="h-2 overflow-hidden rounded-full bg-[var(--panel-soft)]">
                <span
                  class="block h-full rounded-full bg-gradient-to-r from-signal-400 via-blue-500 to-electric-400 transition-all duration-500 group-hover:saturate-150"
                  [style.width.%]="skill.level"
                ></span>
              </div>
            </div>
          }
        </div>
      </div>
    </article>
  `
})
export class SkillCardComponent {
  @Input({ required: true }) group!: SkillGroup;
}

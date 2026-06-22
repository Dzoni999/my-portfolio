import { Component, Input } from '@angular/core';
import { RevealDirective } from '../core/reveal.directive';
import { Project } from '../data/portfolio.data';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <article
      appReveal
      class="group glass-panel relative flex h-full flex-col overflow-hidden rounded-[1.75rem] transition duration-300 hover:-translate-y-1 hover:border-signal-400/50 hover:shadow-glow"
    >
      <div class="relative min-h-52 overflow-hidden border-b border-[var(--panel-border)] bg-gradient-to-br from-graphite-950 via-graphite-800 to-blue-950">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.26),transparent_28rem)]"></div>
        <div class="absolute left-6 top-6 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-white/80 backdrop-blur">
          {{ project.status }}
        </div>
        <div class="absolute inset-x-6 bottom-6">
          <div class="rounded-3xl border border-white/12 bg-white/10 p-5 backdrop-blur-md">
            <p class="font-mono text-xs font-bold uppercase tracking-[0.24em] text-cyan-200">Project preview</p>
            <p class="mt-3 font-display text-3xl font-extrabold text-white">{{ project.imageLabel }}</p>
            <div class="mt-4 grid grid-cols-5 gap-2" aria-hidden="true">
              @for (item of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; track item) {
                <span class="h-7 rounded-lg border border-white/10 bg-white/10"></span>
              }
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-1 flex-col p-6">
        <h3 class="font-display text-2xl font-extrabold text-primary">{{ project.title }}</h3>
        <p class="mt-3 flex-1 text-sm leading-7 text-secondary">{{ project.description }}</p>

        <div class="mt-6 flex flex-wrap gap-2">
          @for (technology of project.technologies; track technology) {
            <span class="rounded-full border border-[var(--panel-border)] bg-[var(--panel-soft)] px-3 py-1.5 text-xs font-bold text-secondary">
              {{ technology }}
            </span>
          }
        </div>

        <div class="mt-7 grid gap-3 sm:grid-cols-2">
          <a
            [href]="project.githubUrl"
            target="_blank"
            rel="noreferrer"
            class="focus-ring btn-secondary px-4 py-3 text-sm"
          >
            GitHub
          </a>
          <a
            [href]="project.liveUrl"
            target="_blank"
            rel="noreferrer"
            class="focus-ring btn-primary px-4 py-3 text-sm"
          >
            Live Demo
          </a>
        </div>
      </div>
    </article>
  `
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;
}

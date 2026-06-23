import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../core/reveal.directive';
import { SeoService } from '../../core/seo.service';
import { highlights, metrics, profile, projects, skillGroups } from '../../data/portfolio.data';
import { ProjectCardComponent } from '../../shared/project-card.component';
import { SectionHeadingComponent } from '../../shared/section-heading.component';
import { SkillCardComponent } from '../../shared/skill-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RevealDirective, SectionHeadingComponent, SkillCardComponent, ProjectCardComponent],
  template: `
    <section class="relative overflow-hidden pb-20 pt-32 sm:pb-28 lg:pt-40">
      <div class="absolute left-[8%] top-24 -z-10 size-72 rounded-full bg-signal-400/12 blur-3xl"></div>
      <div class="absolute right-[4%] top-32 -z-10 size-96 rounded-full bg-electric-400/10 blur-3xl"></div>
      <div class="absolute left-1/2 top-20 -z-10 h-px w-[80rem] -translate-x-1/2 bg-gradient-to-r from-transparent via-signal-400/40 to-transparent"></div>

      <div class="section-shell grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
        <div appReveal>
          <div class="mb-6 inline-flex items-center gap-3 rounded-full border border-[var(--panel-border)] bg-[var(--panel-soft)] px-4 py-2 text-sm font-bold text-secondary backdrop-blur">
            <span class="relative flex size-3">
              <span class="absolute inline-flex size-full animate-ping rounded-full bg-signal-400 opacity-55"></span>
              <span class="relative inline-flex size-3 rounded-full bg-signal-400"></span>
            </span>
            Available for backend developer opportunities
          </div>

          <p class="text-sm font-black uppercase tracking-[0.32em] accent-text">
            {{ profile.location }} based {{ profile.role }}
          </p>

          <h1 class="text-balance mt-5 font-display text-5xl font-extrabold tracking-tight text-primary sm:text-6xl lg:text-7xl">
            Building web applications with .NET, Angular, and SQL Server.
          </h1>

          <p class="mt-7 max-w-2xl text-lg leading-9 text-secondary">
            I am {{ profile.name }}, a backend developer passionate about .NET, REST APIs, databases, and building practical software solutions.
          </p>

          <div class="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a routerLink="/projects" class="focus-ring btn-primary px-6 py-3 text-sm">
              View projects
            </a>
            <a routerLink="/contact" class="focus-ring btn-secondary px-6 py-3 text-sm">
              Contact me
            </a>
            <a [href]="profile.cvUrl" download class="focus-ring btn-secondary px-6 py-3 text-sm">
              Download CV
            </a>
          </div>

          <div class="mt-5 flex flex-wrap gap-3">
            <a [href]="profile.github" target="_blank" rel="noreferrer" class="focus-ring rounded-full px-4 py-2 text-sm font-bold text-secondary transition hover:bg-[var(--accent-soft)] hover:text-primary">
              GitHub
            </a>
            <a [href]="profile.linkedin" target="_blank" rel="noreferrer" class="focus-ring rounded-full px-4 py-2 text-sm font-bold text-secondary transition hover:bg-[var(--accent-soft)] hover:text-primary">
              LinkedIn
            </a>
          </div>

          <dl class="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            @for (metric of metrics; track metric.label) {
              <div class="surface-panel rounded-2xl p-4 transition hover:-translate-y-1 hover:border-signal-400/50">
                <dt class="font-display text-2xl font-extrabold text-primary">{{ metric.value }}</dt>
                <dd class="mt-1 text-sm leading-6 text-muted">{{ metric.label }}</dd>
              </div>
            }
          </dl>
        </div>

        <div appReveal class="relative">
          <div class="absolute inset-8 -z-10 rounded-full bg-signal-400/12 blur-3xl"></div>
          <div class="glass-panel relative overflow-hidden rounded-[2rem]">
            <div class="absolute right-8 top-8 size-24 animate-orbit rounded-full bg-signal-400/15 blur-xl"></div>
            <div class="flex items-center justify-between border-b border-[var(--panel-border)] px-5 py-4">
              <div class="flex gap-2" aria-hidden="true">
                <span class="size-3 rounded-full bg-sky-300/80"></span>
                <span class="size-3 rounded-full bg-blue-400/80"></span>
                <span class="size-3 rounded-full bg-cyan-300/80"></span>
              </div>
              <p class="text-xs font-black uppercase tracking-[0.24em] text-muted">api.gateway</p>
            </div>

            <div class="relative grid gap-5 p-5 sm:p-7">
              <div class="rounded-3xl border border-signal-400/25 bg-[var(--accent-soft)] p-5">
                <div class="flex items-center justify-between gap-4">
                  <div>
                    <p class="text-sm font-black accent-text">POST /api/auth/login</p>
                    <p class="mt-2 text-xs leading-6 text-secondary">JWT authentication, validation, and predictable responses.</p>
                  </div>
                  <span class="rounded-full bg-signal-400 px-3 py-1 text-xs font-black text-white">200</span>
                </div>
              </div>

              <div class="grid gap-4 sm:grid-cols-2">
                <div class="surface-panel rounded-3xl p-5">
                  <p class="text-xs font-black uppercase tracking-[0.24em] accent-text">Data layer</p>
                  <p class="mt-3 font-display text-3xl font-extrabold text-primary">EF Core</p>
                  <div class="mt-5 h-1.5 overflow-hidden rounded-full bg-[var(--panel-soft)]">
                    <span class="block h-full w-4/5 origin-left animate-pulse-line rounded-full bg-signal-400"></span>
                  </div>
                </div>
                <div class="surface-panel rounded-3xl p-5">
                  <p class="text-xs font-black uppercase tracking-[0.24em] accent-text">Contracts</p>
                  <p class="mt-3 font-display text-3xl font-extrabold text-primary">REST</p>
                  <div class="mt-5 grid grid-cols-4 gap-1.5" aria-hidden="true">
                    @for (item of [1, 2, 3, 4, 5, 6, 7, 8]; track item) {
                      <span class="h-8 rounded-lg border border-[var(--panel-border)] bg-[var(--panel-soft)]"></span>
                    }
                  </div>
                </div>
              </div>

              <div class="rounded-3xl border border-[var(--panel-border)] bg-[var(--panel-strong)] p-5 font-mono text-sm leading-7 text-secondary shadow-cyan">
                <p><span class="text-electric-400">builder</span>.Services.AddAuthentication();</p>
                <p><span class="text-electric-400">app</span>.MapControllers();</p>
                <p><span class="text-signal-400">await</span> db.SaveChangesAsync();</p>
                <p class="mt-3 inline-block overflow-hidden whitespace-nowrap border-r border-signal-400 pr-1 text-signal-400 animate-typing">
                  Clean backend, calmly shipped.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20">
      <div class="section-shell">
        <app-section-heading
          appReveal
          eyebrow="About"
          title="Building practical software solutions."
          description="I enjoy building web applications, designing APIs, and creating database structures that are simple, reliable, and easy to maintain."
        />

        <div class="mt-10 grid gap-5 lg:grid-cols-3">
          @for (highlight of highlights; track highlight.title) {
            <article appReveal class="glass-panel rounded-[1.75rem] p-6 transition hover:-translate-y-1 hover:border-signal-400/50">
              <span class="mb-6 block h-1 w-14 rounded-full bg-gradient-to-r from-signal-400 to-electric-400"></span>
              <h3 class="font-display text-xl font-extrabold text-primary">{{ highlight.title }}</h3>
              <p class="mt-4 text-sm leading-7 text-secondary">{{ highlight.description }}</p>
            </article>
          }
        </div>
      </div>
    </section>

    <section class="py-20">
      <div class="section-shell">
        <div class="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <app-section-heading
            appReveal
            eyebrow="Skills"
            title="Technologies I work with."
            description="Tools and technologies I use for backend development, databases, frontend applications, and everyday software engineering."
          />
          <a routerLink="/skills" class="focus-ring btn-secondary px-5 py-3 text-sm">
            Explore all skills
          </a>
        </div>

        <div class="mt-10 grid gap-5 md:grid-cols-2">
          @for (group of skillGroups; track group.category) {
            <app-skill-card [group]="group" />
          }
        </div>
      </div>
    </section>

    <section class="py-20">
      <div class="section-shell">
        <div class="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <app-section-heading
            appReveal
            eyebrow="Projects"
            title="Projects I've built."
            description="A collection of projects built using .NET, Angular, SQL Server, APIs, and automation tools."
          />
          <a routerLink="/projects" class="focus-ring btn-secondary px-5 py-3 text-sm">
            View all projects
          </a>
        </div>

        <div class="mt-10 grid gap-6 lg:grid-cols-3">
          @for (project of projects.slice(0, 3); track project.title) {
            <app-project-card [project]="project" />
          }
        </div>
      </div>
    </section>

    <section class="pb-24 pt-16">
      <div class="section-shell">
        <div appReveal class="glass-panel relative overflow-hidden rounded-[2rem] p-7 sm:p-10">
          <div class="absolute right-0 top-0 size-64 rounded-full bg-electric-400/12 blur-3xl"></div>
          <div class="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p class="text-sm font-black uppercase tracking-[0.3em] accent-text">Contact</p>
              <h2 class="mt-4 font-display text-3xl font-extrabold text-primary sm:text-4xl">
                Interested in working together?
              </h2>
              <p class="mt-4 max-w-2xl text-base leading-8 text-secondary">
                Feel free to reach out if you would like to discuss a project, collaboration, or backend development opportunity.
              </p>
            </div>
            <a routerLink="/contact" class="focus-ring btn-primary px-6 py-3 text-sm">
              Open contact page
            </a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent implements OnInit {
  private readonly seo = inject(SeoService);
  protected readonly profile = profile;
  protected readonly metrics = metrics;
  protected readonly highlights = highlights;
  protected readonly skillGroups = skillGroups;
  protected readonly projects = projects;

  ngOnInit(): void {
    this.seo.update({
      title: 'Nikola Sajic | Backend Developer',
      description:
        'Nikola Sajic is a backend developer from Serbia building web applications with .NET, Angular, SQL Server, and REST APIs.'
    });
  }
}

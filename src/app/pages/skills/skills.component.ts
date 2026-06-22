import { Component, OnInit, inject } from '@angular/core';
import { RevealDirective } from '../../core/reveal.directive';
import { SeoService } from '../../core/seo.service';
import { skillGroups } from '../../data/portfolio.data';
import { SectionHeadingComponent } from '../../shared/section-heading.component';
import { SkillCardComponent } from '../../shared/skill-card.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealDirective, SectionHeadingComponent, SkillCardComponent],
  template: `
    <section class="relative overflow-hidden pb-20 pt-32 lg:pt-40">
      <div class="absolute left-[8%] top-28 -z-10 size-80 rounded-full bg-electric-400/10 blur-3xl"></div>
      <div class="section-shell">
        <app-section-heading
          appReveal
          eyebrow="Technical stack"
          title="Tools for building dependable backend products."
          description="A focused mix of .NET backend development, relational databases, web frontend basics, and delivery tooling, shown with practical proficiency indicators."
        />

        <div class="mt-12 grid gap-5 md:grid-cols-2">
          @for (group of skillGroups; track group.category) {
            <app-skill-card [group]="group" />
          }
        </div>
      </div>
    </section>

    <section class="pb-24">
      <div class="section-shell">
        <div class="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <article appReveal class="glass-panel rounded-[2rem] p-7 sm:p-9">
            <p class="text-sm font-black uppercase tracking-[0.28em] accent-text">Backend depth</p>
            <h2 class="mt-4 font-display text-3xl font-extrabold text-primary">Where I add the most value.</h2>
            <p class="mt-4 leading-8 text-secondary">
              I am strongest where web application behavior meets persistence: REST contracts, validation,
              authentication, EF Core queries, and SQL-backed business workflows.
            </p>
          </article>

          <div class="grid gap-5 sm:grid-cols-2">
            <article appReveal class="surface-panel rounded-[1.75rem] p-6 transition hover:-translate-y-1 hover:border-signal-400/50">
              <p class="text-4xl font-extrabold accent-text">API</p>
              <h3 class="mt-4 text-xl font-bold text-primary">Clear contracts</h3>
              <p class="mt-3 text-sm leading-7 text-secondary">Endpoints shaped around readable resources, explicit DTOs, and practical response patterns.</p>
            </article>
            <article appReveal class="surface-panel rounded-[1.75rem] p-6 transition hover:-translate-y-1 hover:border-signal-400/50">
              <p class="text-4xl font-extrabold accent-text">DB</p>
              <h3 class="mt-4 text-xl font-bold text-primary">Durable data</h3>
              <p class="mt-3 text-sm leading-7 text-secondary">Schemas and queries designed for clarity, integrity, and future iteration.</p>
            </article>
            <article appReveal class="surface-panel rounded-[1.75rem] p-6 transition hover:-translate-y-1 hover:border-signal-400/50">
              <p class="text-4xl font-extrabold accent-text">SEC</p>
              <h3 class="mt-4 text-xl font-bold text-primary">JWT auth</h3>
              <p class="mt-3 text-sm leading-7 text-secondary">Authentication flows that keep authorization boundaries visible and testable.</p>
            </article>
            <article appReveal class="surface-panel rounded-[1.75rem] p-6 transition hover:-translate-y-1 hover:border-signal-400/50">
              <p class="text-4xl font-extrabold accent-text">DX</p>
              <h3 class="mt-4 text-xl font-bold text-primary">Maintainability</h3>
              <p class="mt-3 text-sm leading-7 text-secondary">Code organization, Swagger docs, and tooling that reduce friction for teams.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  `
})
export class SkillsComponent implements OnInit {
  private readonly seo = inject(SeoService);
  protected readonly skillGroups = skillGroups;

  ngOnInit(): void {
    this.seo.update({
      title: 'Skills | Nikola Sajic',
      description:
        'Explore Nikola Sajic technical skills including C#, ASP.NET Core Web API, Entity Framework Core, SQL Server, PostgreSQL, Angular, TypeScript, Git, and Swagger.'
    });
  }
}

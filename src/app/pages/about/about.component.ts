import { Component, OnInit, inject } from '@angular/core';
import { RevealDirective } from '../../core/reveal.directive';
import { SeoService } from '../../core/seo.service';
import { highlights, metrics, principles, profile } from '../../data/portfolio.data';
import { SectionHeadingComponent } from '../../shared/section-heading.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective, SectionHeadingComponent],
  template: `
    <section class="relative overflow-hidden pb-20 pt-32 lg:pt-40">
      <div class="absolute right-[12%] top-28 -z-10 size-80 rounded-full bg-signal-400/10 blur-3xl"></div>
      <div class="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div appReveal class="lg:sticky lg:top-28">
          <p class="text-sm font-black uppercase tracking-[0.32em] accent-text">About Nikola</p>
          <h1 class="mt-5 font-display text-5xl font-extrabold tracking-tight text-primary sm:text-6xl">
            Backend developer with a systems mindset.
          </h1>
          <p class="mt-6 text-lg leading-9 text-secondary">
            I am a backend developer from {{ profile.location }} focused on building web applications and REST APIs using .NET technologies.
          </p>

          <dl class="mt-8 grid grid-cols-2 gap-3">
            @for (metric of metrics; track metric.label) {
              <div class="surface-panel rounded-2xl p-4 transition hover:-translate-y-1 hover:border-signal-400/50">
                <dt class="font-display text-2xl font-extrabold text-primary">{{ metric.value }}</dt>
                <dd class="mt-1 text-xs leading-5 text-muted">{{ metric.label }}</dd>
              </div>
            }
          </dl>
        </div>

        <div class="grid gap-5">
          <article appReveal class="glass-panel rounded-[2rem] p-7 sm:p-9">
            <h2 class="font-display text-2xl font-extrabold text-primary">How I work</h2>
            <p class="mt-4 leading-8 text-secondary">
              I enjoy creating clean, maintainable, and scalable software solutions. My main interests are backend development,
              database design, software architecture, and modern web technologies.
            </p>
            <p class="mt-4 leading-8 text-muted">
              Good backend work should make a product easier to operate: clear endpoints, consistent validation, predictable persistence,
              practical error handling, and code that the next developer can understand quickly.
            </p>
          </article>

          <div class="grid gap-5 sm:grid-cols-3">
            @for (highlight of highlights; track highlight.title) {
              <article appReveal class="surface-panel rounded-3xl p-6 transition hover:-translate-y-1 hover:border-signal-400/50">
                <span class="mb-5 block h-1 w-12 rounded-full bg-gradient-to-r from-signal-400 to-electric-400"></span>
                <h3 class="text-lg font-extrabold leading-7 text-primary">{{ highlight.title }}</h3>
                <p class="mt-3 text-sm leading-7 text-secondary">{{ highlight.description }}</p>
              </article>
            }
          </div>
        </div>
      </div>
    </section>

    <section class="pb-24">
      <div class="section-shell">
        <app-section-heading
          appReveal
          eyebrow="Engineering focus"
          title="The areas I keep sharpening."
          description="A backend career rewards depth, restraint, and repeatable habits. These are the areas I pay the most attention to."
        />

        <div class="mt-10 grid gap-5 lg:grid-cols-4">
          @for (principle of principles; track principle; let index = $index) {
            <article appReveal class="glass-panel rounded-[1.75rem] p-6 transition hover:-translate-y-1 hover:border-signal-400/50">
              <p class="text-sm font-black uppercase tracking-[0.24em] accent-text">0{{ index + 1 }}</p>
              <h3 class="mt-5 text-lg font-extrabold leading-8 text-primary">{{ principle }}</h3>
            </article>
          }
        </div>
      </div>
    </section>
  `
})
export class AboutComponent implements OnInit {
  private readonly seo = inject(SeoService);
  protected readonly profile = profile;
  protected readonly principles = principles;
  protected readonly highlights = highlights;
  protected readonly metrics = metrics;

  ngOnInit(): void {
    this.seo.update({
      title: 'About Nikola Sajic | Junior Backend Developer',
      description:
        'Learn about Nikola Sajic, a junior backend developer from Belgrade, Serbia focused on .NET APIs, clean architecture, database design, and maintainable software.'
    });
  }
}

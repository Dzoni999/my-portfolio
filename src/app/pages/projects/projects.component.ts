import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../core/reveal.directive';
import { SeoService } from '../../core/seo.service';
import { projects } from '../../data/portfolio.data';
import { ProjectCardComponent } from '../../shared/project-card.component';
import { SectionHeadingComponent } from '../../shared/section-heading.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink, RevealDirective, ProjectCardComponent, SectionHeadingComponent],
  template: `
    <section class="relative overflow-hidden pb-16 pt-32 lg:pt-40">
      <div class="absolute left-1/2 top-20 -z-10 size-[34rem] -translate-x-1/2 rounded-full bg-signal-400/10 blur-3xl"></div>
      <div class="section-shell">
        <app-section-heading
          appReveal
          eyebrow="Projects"
          title="Projects I've built."
          description="A collection of projects built using .NET, Angular, SQL Server, REST APIs, and workflow automation."
        />

        <div class="mt-12 grid gap-6 lg:grid-cols-3">
          @for (project of projects; track project.title) {
            <app-project-card [project]="project" />
          }
        </div>
      </div>
    </section>

    <section class="pb-24">
      <div class="section-shell">
        <div appReveal class="glass-panel relative overflow-hidden rounded-[2rem] p-7 sm:p-10">
          <div class="absolute -right-16 -top-16 size-64 rounded-full bg-electric-400/12 blur-3xl"></div>
          <div class="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p class="text-sm font-black uppercase tracking-[0.28em] accent-text">Let's connect</p>
              <h2 class="mt-4 font-display text-3xl font-extrabold text-primary sm:text-4xl">
                Interested in working together?
              </h2>
              <p class="mt-4 max-w-2xl leading-8 text-secondary">
               Feel free to reach out if you would like to discuss a project, collaboration, or backend development opportunity.
              </p>
            </div>
            <a routerLink="/contact" class="focus-ring btn-primary px-6 py-3 text-sm">
              Contact me
            </a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent implements OnInit {
  private readonly seo = inject(SeoService);
  protected readonly projects = projects;

  ngOnInit(): void {
    this.seo.update({
      title: 'Projects | Nikola Sajic',
      description:
        'Explore software projects built by Nikola Sajic using ASP.NET Core, Angular, SQL Server, REST APIs, and workflow automation.'
    });
  }
}

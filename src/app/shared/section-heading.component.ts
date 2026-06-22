import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  template: `
    <div class="max-w-3xl">
      <p class="mb-3 text-sm font-black uppercase tracking-[0.28em] accent-text">{{ eyebrow }}</p>
      <h2 class="font-display text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
        {{ title }}
      </h2>
      @if (description) {
        <p class="mt-4 text-base leading-8 text-secondary sm:text-lg">
          {{ description }}
        </p>
      }
    </div>
  `
})
export class SectionHeadingComponent {
  @Input({ required: true }) eyebrow = '';
  @Input({ required: true }) title = '';
  @Input() description = '';
}

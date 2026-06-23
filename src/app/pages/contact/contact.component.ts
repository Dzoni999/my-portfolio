import { NgClass } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RevealDirective } from '../../core/reveal.directive';
import { SeoService } from '../../core/seo.service';
import { profile } from '../../data/portfolio.data';

const FORMSPREE_ENDPOINT = '';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule, RevealDirective],
  template: `
    <section class="relative overflow-hidden pb-24 pt-32 lg:pt-40">
      <div class="absolute right-[8%] top-28 -z-10 size-80 rounded-full bg-signal-400/10 blur-3xl"></div>
      <div class="section-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div appReveal>
          <p class="text-sm font-black uppercase tracking-[0.32em] accent-text">Contact</p>
          <h1 class="mt-5 font-display text-5xl font-extrabold tracking-tight text-primary sm:text-6xl">
            Let's get in touch.
          </h1>
          <p class="mt-6 max-w-2xl text-lg leading-9 text-secondary">
           I am open to backend developer opportunities, .NET projects, and collaborations. Feel free to reach out if you would like to discuss a role, project, or partnership.
          </p>

          <div class="mt-8 grid gap-3">
            <a [href]="'mailto:' + profile.email" class="focus-ring surface-panel rounded-3xl p-5 transition hover:border-signal-400/50">
              <span class="block text-sm font-black uppercase tracking-[0.24em] accent-text">Email</span>
              <span class="mt-2 block text-lg font-bold text-primary">{{ profile.email }}</span>
            </a>
            <a [href]="profile.github" target="_blank" rel="noreferrer" class="focus-ring surface-panel rounded-3xl p-5 transition hover:border-signal-400/50">
              <span class="block text-sm font-black uppercase tracking-[0.24em] accent-text">GitHub</span>
              <span class="mt-2 block text-lg font-bold text-primary">github.com/Dzoni999</span>
            </a>
            <a [href]="profile.linkedin" target="_blank" rel="noreferrer" class="focus-ring surface-panel rounded-3xl p-5 transition hover:border-signal-400/50">
              <span class="block text-sm font-black uppercase tracking-[0.24em] accent-text">LinkedIn</span>
              <span class="mt-2 block text-lg font-bold text-primary">Connect professionally</span>
            </a>
          </div>
        </div>

        <form
          appReveal
          class="glass-panel rounded-[2rem] p-6 sm:p-8"
          [formGroup]="contactForm"
          [attr.action]="formEndpoint || null"
          method="post"
          (ngSubmit)="submit()"
          novalidate
        >
          <div class="flex items-start justify-between gap-6">
            <div>
              <h2 class="font-display text-2xl font-extrabold text-primary">Send me a message</h2>
              <p class="mt-3 text-sm leading-7 text-secondary">
                Use the form below or contact me directly by email.
              </p>
            </div>
            <span class="hidden rounded-2xl border border-[var(--panel-border)] bg-[var(--accent-soft)] px-3 py-2 font-mono text-xs font-black accent-text sm:inline-flex">
              FORM
            </span>
          </div>

          <div class="mt-7 grid gap-5">
            <label class="grid gap-2">
              <span class="text-sm font-bold text-primary">Name</span>
              <input
                formControlName="name"
                autocomplete="name"
                class="input-control"
                [ngClass]="{ 'border-red-400': showError('name') }"
                placeholder="Your name"
                type="text"
              >
              @if (showError('name')) {
                <span class="text-sm font-semibold text-red-400">Please enter your name.</span>
              }
            </label>

            <label class="grid gap-2">
              <span class="text-sm font-bold text-primary">Email</span>
              <input
                formControlName="email"
                autocomplete="email"
                class="input-control"
                [ngClass]="{ 'border-red-400': showError('email') }"
                placeholder="you@example.com"
                type="email"
              >
              @if (showError('email')) {
                <span class="text-sm font-semibold text-red-400">Please enter a valid email address.</span>
              }
            </label>

            <label class="grid gap-2">
              <span class="text-sm font-bold text-primary">Message</span>
              <textarea
                formControlName="message"
                rows="6"
                class="input-control resize-y"
                [ngClass]="{ 'border-red-400': showError('message') }"
                placeholder="Tell me about your project, opportunity, or idea."
              ></textarea>
              @if (showError('message')) {
                <span class="text-sm font-semibold text-red-400">Please add a message with at least 20 characters.</span>
              }
            </label>
          </div>

          @if (submitted() && contactForm.valid) {
            <p class="mt-5 rounded-2xl border border-signal-400/35 bg-[var(--accent-soft)] px-4 py-3 text-sm font-bold text-primary">
              Your message looks good. You can also contact me directly using the email link below.
            </p>
          }

          <div class="mt-7 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
            <button type="submit" class="focus-ring btn-primary px-6 py-3 text-sm">
              Review message
            </button>
            <a [href]="'mailto:' + emailDraft()" class="focus-ring btn-secondary px-6 py-3 text-sm">
              Open email draft
            </a>
          </div>
        </form>
      </div>
    </section>
  `
})
export class ContactComponent implements OnInit {
  private readonly seo = inject(SeoService);
  protected readonly profile = profile;
  protected readonly formEndpoint = FORMSPREE_ENDPOINT;
  protected readonly submitted = signal(false);
  protected readonly contactForm = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(2)] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    message: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(20)] })
  });
  protected emailDraft(): string {
    const value = this.contactForm.getRawValue();
    const subject = encodeURIComponent(`Portfolio contact from ${value.name || 'visitor'}`);
    const body = encodeURIComponent(`${value.message}\n\nFrom: ${value.name}\nEmail: ${value.email}`);
    return `${profile.email}?subject=${subject}&body=${body}`;
  }

  ngOnInit(): void {
    this.seo.update({
      title: 'Contact | Nikola Sajic',
      description:
        'Contact Nikola Sajic for backend development opportunities, .NET projects, REST API development, and web application collaboration.'
    });
  }

  submit(): void {
    this.submitted.set(true);
    this.contactForm.markAllAsTouched();
  }

  showError(controlName: 'name' | 'email' | 'message'): boolean {
    const control = this.contactForm.controls[controlName];
    return control.invalid && (control.touched || this.submitted());
  }
}

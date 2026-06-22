import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Nikola Sajic | Backend Developer',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent)
  },
  {
    path: 'about',
    title: 'About | Nikola Sajic',
    loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent)
  },
  {
    path: 'skills',
    title: 'Skills | Nikola Sajic',
    loadComponent: () => import('./pages/skills/skills.component').then((m) => m.SkillsComponent)
  },
  {
    path: 'projects',
    title: 'Projects | Nikola Sajic',
    loadComponent: () => import('./pages/projects/projects.component').then((m) => m.ProjectsComponent)
  },
  {
    path: 'contact',
    title: 'Contact | Nikola Sajic',
    loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('@components/home/home').then(comp => comp.Home) },
  { path: 'experiencia', loadComponent: () => import('@components/experiencia/experiencia').then(comp => comp.Experiencia) },
  { path: 'proyectos', loadComponent: () => import('@components/proyectos/proyectos').then(comp => comp.Proyectos) },
  { path: 'contacto', loadComponent: () => import('@components/contacto/contacto').then(comp => comp.Contacto) },
  { path: '**', loadComponent: () => import('@components/not-found/not-found').then(comp => comp.NotFound) }
];

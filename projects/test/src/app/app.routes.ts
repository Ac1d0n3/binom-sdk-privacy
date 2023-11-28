import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent:  () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'core/bn-privacy-svc',
        loadComponent:  () => import('./svc-demo/svc-demo.component').then(m => m.SvcDemoComponent)
    },
    {
        path: 'core/bn-privacy-directive',
        loadComponent:  () => import('./directive-demo/directive-demo.component').then(m => m.DirectiveDemoComponent)
    },
    {
        path: 'components/bn-privacy-switch',
        loadComponent:  () => import('./switch-demo/switch-demo.component').then(m => m.SwitchDemoComponent)
    },
    {
        path: 'components/bn-privacy-content',
        loadComponent:  () => import('./content-demo/content-demo.component').then(m => m.ContentDemoComponent)
    },
    {
        path: 'components/bn-privacy-linklist',
        loadComponent:  () => import('./linklist-demo/linklist-demo.component').then(m => m.LinklistDemoComponent)
    },
   
];

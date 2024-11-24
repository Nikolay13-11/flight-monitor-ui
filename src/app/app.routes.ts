import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./main/routes').then((mod) => mod.routes),
    },
];

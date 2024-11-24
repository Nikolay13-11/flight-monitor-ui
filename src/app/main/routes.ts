import { Routes } from '@angular/router';
import { AnalyseComponent } from './layouts/analyse/analyse.component';
import { FindFlightComponent } from './layouts/find-flight/find-flight.component';
import { AboutComponent } from './layouts/about/about.component';
import { NotFoundComponent } from '../common/not-found/not-found.component';
import { ScheduleComponent } from './layouts/schedule/schedule.component';

export const routes: Routes = [
    {
        path: 'analyse',
        component: AnalyseComponent,
    },
    {
        path: 'find-flight',
        component: FindFlightComponent,
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'schedule',
        component: ScheduleComponent,
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];

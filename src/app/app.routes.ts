import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './menu-components/main-page/main-page.component';
import { DashboardsComponent } from './menu-components/dashboards/dashboards.component';
import { TimeTroubleComponent } from './menu-components/time-trouble/time-trouble.component';
import { ColleaguesComponent } from './menu-components/colleagues/colleagues.component';
import { EventsComponent } from './menu-components/events/events.component';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
    // {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'pages', children: [
    {path: 'home', component: MainPageComponent},
    {path: 'time-trouble', component: TimeTroubleComponent},
    {path: 'dashboards', component: DashboardsComponent},
    {path: 'colleagues', component: ColleaguesComponent},
    {path: 'events', component: EventsComponent},
    ]},
    {path: 'home', component: MainPageComponent},
    {path: 'time-trouble', component: TimeTroubleComponent},
    {path: 'dashboards', component: DashboardsComponent},
    {path: 'colleagues', component: ColleaguesComponent},
    {path: 'events', component: EventsComponent},
    {path: 'auth', component: AuthComponent},
    { path: '**', redirectTo: 'home' },
];

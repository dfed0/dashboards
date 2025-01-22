import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: MainPageComponent}
];

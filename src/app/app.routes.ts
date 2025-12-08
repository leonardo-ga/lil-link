import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { DetailsComponent } from './features/details/details.component';
import { LinkSorterComponent } from './features/link-sorter/link-sorter.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page',
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Details',
    },
    {
        path: 'link/:link',
        component: LinkSorterComponent,
        title: 'Link sorter'
    }
];

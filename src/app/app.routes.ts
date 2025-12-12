import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { DetailsComponent } from './features/details/details.component';
import { LinkSorterComponent } from './features/link-sorter/link-sorter.component';
import { WishlistSorterComponent } from './features/wishlist-sorter/wishlist-sorter.component';
import { SignUpComponent } from './features/auth/sign-up/sign-up.component';
import { SignInComponent } from './features/auth/sign-in/sign-in.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'lil-link',
    },
    {
        path: 'sign-up',
        component: SignUpComponent,
        title: 'sign up',
    },
    {
        path: 'sign-in',
        component: SignInComponent,
        title: 'sign in',
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'details',
    },
    {
        path: 'link/:link',
        component: LinkSorterComponent,
        title: 'link'
    },
        {
        path: 'wishlist/:link',
        component: WishlistSorterComponent,
        title: 'wishlist'
    }
];

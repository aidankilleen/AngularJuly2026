import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { AboutPage } from './about-page/about-page';
import { ContactPage } from './contact-page/contact-page';
import { UsersPage } from './users-page/users-page';
import { AdminPage } from './admin-page/admin-page';

export const routes: Routes = [
  { path: '', title: "Home", component: HomePage },
  { path: 'about', title: "About", component: AboutPage },
  { path: 'contact', title: "Contact", component: ContactPage },
  { path: 'users', title: "Users", component: UsersPage },
  { path: 'admin', title: "Admin", component: AdminPage },
  { path: '**', redirectTo: '' }
];

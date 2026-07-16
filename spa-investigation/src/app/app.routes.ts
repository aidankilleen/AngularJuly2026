import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { AboutPage } from './about-page/about-page';
import { ContactPage } from './contact-page/contact-page';
import { UsersPage } from './users-page/users-page';
import { AdminPage } from './admin-page/admin-page';
import { UserDetailPage } from './user-detail-page/user-detail-page';
import { UsersHttpPage } from './users-http-page/users-http-page';
import { UserDetailHttpPage } from './user-detail-http-page/user-detail-http-page';
import { UserDialogPage } from './user-dialog-page/user-dialog-page';

export const routes: Routes = [
  { path: '', title: "Home", component: HomePage },
  { path: 'about', title: "About", component: AboutPage },
  { path: 'contact', title: "Contact", component: ContactPage },
  { path: 'users', title: "Users", component: UsersPage },
  { path: 'users/:id', title: "", component: UserDetailPage },
  { path: 'admin', title: "Admin", component: AdminPage },
  { path: 'users-http', title: "Users Http", component: UsersHttpPage },
  { path: 'users-http/:id', title: "", component:  UserDetailHttpPage },
  { path: 'user-dialog', title: "Users Dialog", component: UserDialogPage },
  { path: '**', redirectTo: '' }
];

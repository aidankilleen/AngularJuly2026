import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { AboutPage } from './about-page/about-page';
import { ContactPage } from './contact-page/contact-page';
import { UsersPage } from './users-page/users-page';

export const routes: Routes = [
  { path:'', title:"Home Page", component: HomePage },
  { path:'about', title:"About Us", component: AboutPage },
  { path:'contact', title:"Contact Us", component: ContactPage },
  { path:'users', title:"Users", component: UsersPage },
];

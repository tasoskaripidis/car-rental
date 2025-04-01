import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AbouUsComponent } from './abou-us/abou-us.component';
import { ElectricHybridComponent } from './electric-hybrid/electric-hybrid.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { MainpageComponent } from './mainpage/mainpage.component';

export const routes: Routes = [
  {
    path: '',
    component: MainpageComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },

      {
        path: 'aboutUs',
        component: AbouUsComponent,
      },
      {
        path: 'reviews',
        component: ReviewsComponent,
      },
      {
        path: 'hybrid-electric',
        component: ElectricHybridComponent,
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];

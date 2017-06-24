import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

export const AppRouting = RouterModule.forRoot(appRoutes, {
  useHash: true
});
